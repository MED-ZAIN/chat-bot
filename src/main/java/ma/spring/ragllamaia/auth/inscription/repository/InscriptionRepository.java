package ma.spring.ragllamaia.auth.inscription.repository;

import ma.spring.ragllamaia.auth.inscription.entity.Inscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



public interface InscriptionRepository extends JpaRepository<Inscription,Integer> {



}
