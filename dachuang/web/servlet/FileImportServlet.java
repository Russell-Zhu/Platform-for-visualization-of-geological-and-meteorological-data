package cn.dachuang.web.servlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;

import weka.classifiers.AbstractClassifier;
import weka.classifiers.functions.LinearRegression;
import weka.classifiers.functions.MultilayerPerceptron;
import weka.core.Attribute;
import weka.core.converters.ArffLoader;
import weka.core.converters.ConverterUtils.DataSource;
import weka.core.Instances;
import weka.filters.Filter;
import weka.filters.unsupervised.attribute.Remove;

@WebServlet("/FileImportServlet")
public class FileImportServlet extends HttpServlet {
    public Attribute[] inputAttributes;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //获取训练集文件路径
        String fn = this.getServletContext().getRealPath("/data/train.arff");

        //获取测试集文本内容并转为输入流
        String test=request.getParameter("hide");
        System.out.println(test);
        InputStream result = new ByteArrayInputStream(test.getBytes(StandardCharsets.UTF_8));

        //获取用户输入属性
        String [] input;
        int[] selectedInput = new int[0];
        if(request.getParameterValues("inputAttribute")!=null){
            input=request.getParameterValues("inputAttribute");
            selectedInput=Arrays.stream(input).mapToInt(Integer::parseInt).toArray();
        }
        //获取用户输出属性
        String [] output;
        int[] selectedOutput = new int[0];
        if(request.getParameterValues("outputAttribute")!=null){
            output=request.getParameterValues("outputAttribute");
            selectedOutput=Arrays.stream(output).mapToInt(Integer::parseInt).toArray();
        }

        //构建训练分类器
        AbstractClassifier[] classifier = new AbstractClassifier[selectedOutput.length];
        try {
            classifier = trainModel(fn,selectedInput,selectedOutput);
        } catch (Exception e) {
            e.printStackTrace();
        }

        //将测试集文件输入流传到predict函数进行预测
        try {
            double[][] attributeValue=predict(result,classifier,selectedInput,selectedOutput);
            double[][] coefficients=getCofficients(fn,selectedInput,selectedOutput);
            String[][] attributeName=getAtributeName(this.getServletContext().getRealPath("/data/test.arff"),selectedInput,selectedOutput);

            //将预测的结果、系数、属性名传到jsp中
            request.setAttribute("attributeValue",attributeValue);
            request.setAttribute("cofficients",coefficients);
            request.setAttribute("attributeName",attributeName);
            request.getRequestDispatcher("/zzq_index+scientificresearch/nls_demo.jsp").forward(request,response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }

    //可以对Instances数据集进行属性的增加和删除
    public Instances attributeProcess(Instances instances, Filter filter) throws Exception{
        filter.setInputFormat(instances);
        return Filter.useFilter(instances, filter);
    }

    //训练模型，获得分类器
    public AbstractClassifier[] trainModel(String arffFile, int[] selectedInput, int[] selectedOutput) throws Exception {
        //读入训练集文件
        File inputFile = new File(arffFile);
        ArffLoader loader = new ArffLoader();
        loader.setFile(inputFile);
        Instances insTrain = loader.getDataSet();
        Instances[] instances;

        //选出要输出的属性值
        Attribute[] attributes=getClassAttribute(selectedOutput,insTrain);

        //删除没有选中的属性
        instances=deleteAttributes(insTrain,selectedInput,selectedOutput);

        //标定待预测的属性所在的下标,注意无法同时标定多个类值，所以只能分别来标定进行训练
        //这里只是构建了分类器对象数组，但并没有对每个分类器对象进行初始化
        MultilayerPerceptron[] m_classifier=new MultilayerPerceptron[selectedOutput.length];
        for(int i=0;i<selectedOutput.length;i++) {
            //记得要初始化分类器对象数组，否则会空指针异常
            m_classifier[i]=new MultilayerPerceptron();
            //找到类值所对应的下标
            int classIndex=0;
            for(int j=0;j<instances[i].numAttributes();j++){
                if(instances[i].attribute(j).name().equals(attributes[i].name())){
                    classIndex=j;
                    break;
                }
            }
            //设定类别
            instances[i].setClassIndex(classIndex);
            //BP神经网络算法;
            //m_classifier[i].setGUI(true);
            //构造分类器
            m_classifier[i].buildClassifier(instances[i]);
        }
        return m_classifier;
    }

    //获取输入属性
    public Attribute[] getInputAttribute(int[] selectedInput, Instances insTrain){
        Attribute[] attributes=new Attribute[selectedInput.length];
        for(int i=0;i<selectedInput.length;i++){
            attributes[i]=insTrain.attribute(selectedInput[i]);
        }
        return attributes;
    }

    //获取输出的类值属性
    public Attribute[] getClassAttribute(int[] selectedOutput, Instances insTrain){
        Attribute[] attributes=new Attribute[selectedOutput.length];
        for(int i=0;i<selectedOutput.length;i++){
            attributes[i]=insTrain.attribute(selectedOutput[i]);
        }
        return attributes;
    }

    //删除没有选中的属性。为每一个输出属性建立数组
    public Instances[] deleteAttributes(Instances insTrain, int[] selectedInput, int[] selectedOutput) throws Exception {
        //新建待删除数组
        ArrayList<Integer>[] deleteArray=new ArrayList[selectedOutput.length];
        //是否需要保留
        boolean flag=false;
        //遍历检查
        for(int k=0;k<selectedOutput.length;k++) {
            deleteArray[k]=new ArrayList<>();
            for (int i = 0; i < insTrain.numAttributes(); i++) {
                for (int j = 0; j < selectedInput.length; j++) {
                    if (i == selectedInput[j] || i == selectedOutput[k]) {
                        flag = true;
                        break;
                    }
                }
                if (flag == false) {
                    //将带删除属性加入带删除数组
                    deleteArray[k].add(i);
                }
                flag = false;//重置，继续新的循环
            }
        }
        //将ArrayList转为array
        Integer[][] deletedArray = new Integer[selectedOutput.length][];
        for(int k=0;k<selectedOutput.length;k++) {
            deletedArray[k] = deleteArray[k].toArray(new Integer[deleteArray[k].size()]);
        }
        //将Integer数组转为int数组
        int[][] dArray = new int[selectedOutput.length][];
        for(int k=0;k<selectedOutput.length;k++) {
            dArray[k] = Arrays.stream(deletedArray[k]).mapToInt(Integer::valueOf).toArray();
        }
        //一次性移除数组中的元素
        Instances[] instances=new Instances[selectedOutput.length];
        for(int k=0;k<selectedOutput.length;k++) {
            Remove remove = new Remove();
            remove.setAttributeIndicesArray(dArray[k]);
            instances[k] = attributeProcess(insTrain, remove);
        }
        return instances;
    }

    //对每一个类值的所有实例进行预测
    double[][] predict(InputStream test, AbstractClassifier[] classifier,int[] selectedInput, int[] selectedOutput) throws Exception {
        DataSource source = new DataSource(test);
        Instances instances = source.getDataSet();

        //选出要输出的属性值
        Attribute[] attributes=getClassAttribute(selectedOutput,instances);

        Instances[] instPredict;
        //删除没有选中的属性
        instPredict=deleteAttributes(instances,selectedInput,selectedOutput);

        int numOfInstances=instances.numInstances();

        //准备预测结果的数组
        double[][] attributeValue = new double[selectedOutput.length][numOfInstances];

        for(int i=0;i<selectedOutput.length;i++) {
            int classIndex=0;
            //获取类值在新的测试集中的下标
            for(int k=0;k<instPredict[i].numAttributes();k++){
                if(instPredict[i].attribute(k).name().equals(attributes[i].name())){
                    classIndex=k;
                    break;
                }
            }
            //标定类值
            instPredict[i].setClassIndex(classIndex);
            for (int j = 0; j < numOfInstances; j++) {
                //对每一个实例进行预测
                attributeValue[i][j] = classifier[i].classifyInstance(instPredict[i].instance(j));
                System.out.println(attributes[i].name() +": "+ attributeValue[i][j]);
            }
        }
        return attributeValue;
    }

    //获取每一个训练集中的属性名
    String[][] getAtributeName(String filePath,int[] selectedInput, int[] selectedOutput) throws Exception {
        DataSource source = new DataSource(filePath);
        Instances instances = source.getDataSet();

        //选出输入的属性值
        inputAttributes=getInputAttribute(selectedInput,instances);

        //选出要输出的属性值
        Attribute[] attributes=getClassAttribute(selectedOutput,instances);

        String[][] attributeName=new String[attributes.length][inputAttributes.length+1];
        for(int i=0;i<attributes.length;i++){
            for(int j=0;j<inputAttributes.length;j++) {
                attributeName[i][j] = inputAttributes[j].name();
                System.out.println(attributeName[i][j]);
            }
            attributeName[i][inputAttributes.length]=attributes[i].name();
            System.out.println(attributeName[i][inputAttributes.length]);
        }
        return attributeName;
    }

    //获取每一个训练集中的线性回归参数
    double[][] getCofficients(String filePath, int[] selectedInput, int[] selectedOutput) throws Exception {
        DataSource source = new DataSource(filePath);
        Instances instances = source.getDataSet();

        Instances[] insTrain=deleteAttributes(instances,selectedInput,selectedOutput);

        //选出要输出的属性值
        Attribute[] attributes=getClassAttribute(selectedOutput,instances);

        //训练参数数组
        double[][] cofficients = new double[attributes.length][instances.numAttributes() + 1];

        for(int i=0;i<selectedOutput.length;i++) {
            int classIndex=0;
            for(int k=0;k<insTrain[i].numAttributes();k++){
                if(insTrain[i].attribute(k).name().equals(attributes[i].name())){
                    classIndex=k;
                    break;
                }
            }
            insTrain[i].setClassIndex(classIndex);
            //训练线性回归模型
            LinearRegression linear = new LinearRegression();
            linear.buildClassifier(insTrain[i]);//根据训练数据构造分类
            int j = 0;
            //输出模型参数
            for (double coef : linear.coefficients()) {
                if(coef<0) coef=0;
                cofficients[i][j] = coef;
                System.out.println(coef);
                j++;
            }
        }

        return cofficients;
    }
}
