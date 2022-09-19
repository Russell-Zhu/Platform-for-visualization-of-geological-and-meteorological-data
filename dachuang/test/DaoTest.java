package cn.dachuang.test;

import cn.dachuang.dao.EarthquakeCitiesDao;
import cn.dachuang.dao.EarthquakeProvincesDao;
import cn.dachuang.domain.EarthquakeProvinces;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;

public class DaoTest {
    @Test
    public void earthquakeCitiesTest() throws Exception {
        EarthquakeCitiesDao ecd=new EarthquakeCitiesDao();
       // System.out.println(ecd.queryEarthquakeCities());

        //创建jackson核心对象 ObjectMapper
        ObjectMapper mapper=new ObjectMapper();
        //转换
        String json=mapper.writeValueAsString(ecd.queryEarthquakeCities());
        System.out.println(json);
    }

    @Test
    public void earthquakeProvincesTest() throws Exception {
        EarthquakeProvincesDao epd=new EarthquakeProvincesDao();

        //创建jackson核心对象 ObjectMapper
        ObjectMapper mapper=new ObjectMapper();
        //转换
        String json=mapper.writeValueAsString(epd.queryEarthquakeProvinces());
        System.out.println(json);
    }
}
