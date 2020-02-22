package com.assignment3.app.testing;

import org.springframework.data.repository.CrudRepository;
import java.util.UUID;

public interface TestingRepository extends CrudRepository<Testing, UUID> {
}
