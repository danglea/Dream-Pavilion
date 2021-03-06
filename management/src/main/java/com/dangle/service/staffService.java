package com.dangle.service;

import com.dangle.entity.pageEntity;
import com.dangle.pojo.Affair;
import com.dangle.pojo.Staff;

import java.util.List;
import java.util.Map;

/**
 * @author by 党桢乐 on 2019/9/27
 */
public interface staffService {
    pageEntity<Staff> findAllstaff(Integer page, Integer size,Staff staff);

    Staff findDetails(Long id);

    Staff editStaff(Long id);

    void addStaff(Staff staff);

    void saveStaff(Staff staff);

    void addAffair(Affair affair);

    void deleteStaff(Long[] ids);

    List<Map> findSeller();
}
