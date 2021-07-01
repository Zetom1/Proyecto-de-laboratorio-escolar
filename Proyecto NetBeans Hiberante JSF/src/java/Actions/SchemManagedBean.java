package Actions;
//bibliotecas
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

@ManagedBean(name = "schemManagedBean")
@SessionScoped
public class SchemManagedBean {
private String nombre,cadena;
    //lista de getter y setter
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCadena() {
        return cadena;
    }

    public void setCadena(String cadena) {
        this.cadena = cadena;
    }
    //termina lista
    //guarda los valores para enviados por ProfMAnagedBean desde delSchem
    public String SeeSchem(String nombre,String cadena) {
        this.nombre=nombre;
        this.cadena=cadena;
        return "index";//se redirige a index.xhtml
        //*index no es la pagina inicial
    }
    //regresa
    public String SalidaSchem(){    
        return "delSchem";//se redirige a modifySchem.xhtml
    }
    public String Cadenarand(String cadena){
        String cadn = null;        
        if(cadena.contains("sin")) {
            cadn= (Math.floor((Math.random() * 5)  -5))+ "sin"+"("+(Math.floor((Math.random() * 5)  -5))+"x+"+(Math.floor((Math.random() * 5)  -5))+")+"+(Math.floor((Math.random() * 5)  -5));
        }
        else if(cadena.contains("cos")) {
            cadn= (Math.floor((Math.random() * 5)  -5))+ "cos"+"("+(Math.floor((Math.random() * 5)  -5))+"x+"+(Math.floor((Math.random() * 5)  -5))+")+"+(Math.floor((Math.random() * 5)  -5));
        }
        else if(cadena.contains("tan")) {
            cadn= (Math.floor((Math.random() * 5)  -5))+ "tan"+"("+(Math.floor((Math.random() * 5)  -5))+"x+"+(Math.floor((Math.random() * 5)  -5))+")+"+(Math.floor((Math.random() * 5)  -5));
        }
        else if(cadena.contains("log")) {
            cadn= (Math.floor((Math.random() * 5)  -5))+ "log"+"("+(Math.floor((Math.random() * 5)  -5))+"x+"+(Math.floor((Math.random() * 5)  -5))+")+"+(Math.floor((Math.random() * 5)  -5));
        }
        else if(cadena.contains("e^")) {
            cadn= (Math.floor((Math.random() * 5)  -5))+ "e^"+"("+(Math.floor((Math.random() * 5)  -5))+"x+"+(Math.floor((Math.random() * 5)  -5))+")+"+(Math.floor((Math.random() * 5)  -5));
        }
        else if(cadena.contains("x^4")) {
            cadn= (Math.floor((Math.random() * 5)  -5))+ "x^4+"+(Math.floor((Math.random() * 5)  -5))+"x^3+"+(Math.floor((Math.random() * 5)  -5))+"x^2+"+(Math.floor((Math.random() * 5)  -5))+"x+"+(Math.floor((Math.random() * 5)  -5));
        }
        else if(cadena.contains("x^3") && !cadena.contains("x^4")) {
            cadn= (Math.floor((Math.random() * 5)  -5))+"x^3+"+(Math.floor((Math.random() * 5)  -5))+"x^2+"+(Math.floor((Math.random() * 5)  -5))+"x+"+(Math.floor((Math.random() * 5)  -5));
        }
        else if(cadena.contains("x^2") && !cadena.contains("x^3") && !cadena.contains("x^4")) {
            cadn= (Math.floor((Math.random() * 5)  -5))+"x^2+"+(Math.floor((Math.random() * 5)  -5))+"x+"+(Math.floor((Math.random() * 5)  -5));
        }
        else if(cadena.contains("x") && !cadena.contains("x^2") && !cadena.contains("x^3") && !cadena.contains("x^4")) {
            cadn= (Math.floor((Math.random() * 5)  -5))+"x+"+(Math.floor((Math.random() * 5)  -5));
        }
        return cadn;
        
    }
}
