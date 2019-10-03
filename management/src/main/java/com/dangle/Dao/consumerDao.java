package com.dangle.Dao;

import com.dangle.pojo.Consumer;
import com.github.pagehelper.Page;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

/**
 * @author by 党桢乐 on 2019/9/30
 */
@Mapper
@Component("consumerDao")
public interface consumerDao {
    List<Consumer> findAll(Consumer consumer);

    List<Map> findService();

    Consumer findOne(Long id);

    void editConsumer(Consumer consumer);

    void saveConsumer(Consumer consumer);
}