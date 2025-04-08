package ma.spring.ragllamaia.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "codes")
public class Code {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String erreur;
    private String solution;
    private String typeErreur;
    private String langage;


    public Code() {
    }

    public Code(String erreur, String solution, String typeErreur, String langage) {
        this.erreur = erreur;
        this.solution = solution;
        this.typeErreur = typeErreur;
        this.langage = langage;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getErreur() {
        return erreur;
    }

    public void setErreur(String erreur) {
        this.erreur = erreur;
    }

    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }

    public String getTypeErreur() {
        return typeErreur;
    }

    public void setTypeErreur(String typeErreur) {
        this.typeErreur = typeErreur;
    }

    public String getLangage() {
        return langage;
    }

    public void setLangage(String langage) {
        this.langage = langage;
    }
}


