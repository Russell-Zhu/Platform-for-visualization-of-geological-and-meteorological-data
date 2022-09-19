package cn.dachuang.web.servlet;

import cn.dachuang.dao.EarthquakeProvincesDao;
import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/EarthquakeProvincesServlet")
public class EarthquakeProvincesServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        EarthquakeProvincesDao epd=new EarthquakeProvincesDao();

        //创建jackson核心对象 ObjectMapper
        ObjectMapper mapper=new ObjectMapper();
        //转换
        String json=mapper.writeValueAsString(epd.queryEarthquakeProvinces());

        resp.setContentType("text/html;charset=UTF-8");
        resp.getWriter().write(json);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req,resp);
    }
}
