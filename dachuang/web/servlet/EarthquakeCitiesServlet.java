package cn.dachuang.web.servlet;

import cn.dachuang.dao.EarthquakeCitiesDao;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/EarthquakeCitiesServlet")
public class EarthquakeCitiesServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        EarthquakeCitiesDao ecd=new EarthquakeCitiesDao();

        //创建jackson核心对象 ObjectMapper
        ObjectMapper mapper=new ObjectMapper();
        //转换
        String json=mapper.writeValueAsString(ecd.queryEarthquakeCities());

        resp.setContentType("text/html;charset=UTF-8");
        //write()方法是直接将json对象写进去，而不是json字符串，没有双引号
        resp.getWriter().write(json);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req,resp);
    }
}
