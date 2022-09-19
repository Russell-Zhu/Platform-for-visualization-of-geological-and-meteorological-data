package cn.dachuang.domain;



public class EarthquakeCities {
    private int cityID;
    private String cityName;
    private String cityCoord;
    private int earthquakeYear;
    private double earthquakeValue;

    public void setCityID(int cityID) {
        this.cityID = cityID;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public void setCityCoord(String cityCoord) {
        this.cityCoord = cityCoord;
    }

    public void setEarthquakeYear(int earthquakeYear) {
        this.earthquakeYear = earthquakeYear;
    }

    public void setEarthquakeValue(double earthquakeValue) {
        this.earthquakeValue = earthquakeValue;
    }

    public int getCityID() {
        return cityID;
    }

    public String getCityName() {
        return cityName;
    }

    public String getCityCoord() {
        return cityCoord;
    }

    public int getEarthquakeYear() {
        return earthquakeYear;
    }

    public double getEarthquakeValue() {
        return earthquakeValue;
    }

    @Override
    public String toString() {
        return "EarthquakeCities{" +
                "cityID=" + cityID +
                ", cityName='" + cityName + '\'' +
                ", cityCoord=" + cityCoord +
                ", earthquakeYear=" + earthquakeYear +
                ", earthquakeValue=" + earthquakeValue +
                '}';
    }

}
