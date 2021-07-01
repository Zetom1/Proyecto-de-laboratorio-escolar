package entity;
// Generated 8/12/2017 12:27:11 AM by Hibernate Tools 4.3.1


import java.util.HashSet;
import java.util.Set;

/**
 * Grupo generated by hbm2java
 */
public class Grupo  implements java.io.Serializable {


     private String nombre;
     private Set usuarioses = new HashSet(0);
     private Set esquemas = new HashSet(0);

    public Grupo() {
    }

	
    public Grupo(String nombre) {
        this.nombre = nombre;
    }
    public Grupo(String nombre, Set usuarioses, Set esquemas) {
       this.nombre = nombre;
       this.usuarioses = usuarioses;
       this.esquemas = esquemas;
    }
   
    public String getNombre() {
        return this.nombre;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public Set getUsuarioses() {
        return this.usuarioses;
    }
    
    public void setUsuarioses(Set usuarioses) {
        this.usuarioses = usuarioses;
    }
    public Set getEsquemas() {
        return this.esquemas;
    }
    
    public void setEsquemas(Set esquemas) {
        this.esquemas = esquemas;
    }




}

