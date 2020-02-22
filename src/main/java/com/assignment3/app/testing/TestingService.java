package com.assignment3.app.testing;

import org.springframework.stereotype.Service;

@Service
public class TestingService {
    public final TestingRepository testingRepository;


    public TestingService(TestingRepository testingRepository) {
        this.testingRepository = testingRepository;
    }

    public void saveTest(Testing testing) {
        this.testingRepository.save(testing);
    }
}
