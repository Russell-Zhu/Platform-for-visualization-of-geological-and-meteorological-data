package cn.dachuang.domain;

public class EarthquakeProvinces {
    private String provinceName;
    private int earthquakeYear;
    private int earthquakeTimes;

    public void setProvinceName(String provinceName) {
        this.provinceName = provinceName;
    }

    public void setEarthquakeYear(int earthquakeYear) {
        this.earthquakeYear = earthquakeYear;
    }

    public void setEarthquakeTimes(int earthquakeTimes) {
        this.earthquakeTimes = earthquakeTimes;
    }

    public String getProvinceName() {
        return provinceName;
    }

    public int getEarthquakeYear() {
        return earthquakeYear;
    }

    public int getEarthquakeTimes() {
        return earthquakeTimes;
    }
}
