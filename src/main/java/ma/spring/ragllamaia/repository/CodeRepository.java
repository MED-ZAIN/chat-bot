package ma.spring.ragllamaia.repository;

import ma.spring.ragllamaia.entity.Code;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CodeRepository extends JpaRepository<Code, Long> {


}

