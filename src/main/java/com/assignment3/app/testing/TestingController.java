package com.assignment3.app.testing;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/testing")
public class TestingController {
    private Logger logger = LoggerFactory.getLogger(TestingController.class);
    public final TestingService testingService;

    public TestingController(TestingService testingService) {
        this.testingService = testingService;
    }

    @PostMapping("/save")
    @ResponseStatus(code = HttpStatus.OK)
    public void testing(@RequestBody Testing testing) {
        this.testingService.saveTest(testing);
    }

}