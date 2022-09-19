package cn.dachuang.dao;

import cn.dachuang.domain.EarthquakeCities;
import cn.dachuang.domain.EarthquakeProvinces;
import cn.dachuang.utils.JDBCUtils;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class EarthquakeProvincesDao {
    //新建template对象,这时已经完成获取连接对象步骤了
    private JdbcTemplate template=new JdbcTemplate(JDBCUtils.getDataSource());

    public List<EarthquakeProvinces> queryEarthquakeProvinces() {
        String sql = "select * from earthquakeprovinces";
        List<EarthquakeProvinces> list = template.query(sql, new BeanPropertyRowMapper<EarthquakeProvinces>(EarthquakeProvinces.class));
        //可以在JS中把cityCoord字符串类型用eval()转为Array类型
        //无需再释放资源，template已经释放好了
        return list;
    }
}
