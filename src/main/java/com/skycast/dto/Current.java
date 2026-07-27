package com.skycast.dto;

public class Current {


    public Condition condition;

    public Condition getCondition() {
        return condition;
    }

    public void setCondition(Condition condition) {
        this.condition = condition;
    }

    public double temp_c;
    public Current() {
    }

    public Current(Condition condition, double temp_c) {
        this.condition = condition;
        this.temp_c = temp_c;
    }

    public double getTemp_c() {
        return temp_c;
    }

    public void setTemp_c(double temp_c) {
        this.temp_c = temp_c;
    }


}
