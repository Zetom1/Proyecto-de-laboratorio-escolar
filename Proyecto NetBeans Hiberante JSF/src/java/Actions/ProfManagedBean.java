package Actions;
//lista de bibliotecas
import entity.HibernateUtil;
import entity.Esquema;
import entity.Grupo;
import java.io.Serializable;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
//termina lista
@ManagedBean(name="profManagedBean")//nombre con el que sera reconocido por los xhtml
@SessionScoped
public class ProfManagedBean implements Serializable{
    private List lista;   
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
    
    public List getLista() {
        return lista;
    }

    public void setLista(List lista) {
        this.lista = lista;
    }
//termina lista
//guarda todos los datos de la base en una tabla    
    public String TableDelete(){
        //inicializa funciones para hibernate
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession(); 
        //se usa la tabla Esquema de la base y se guarda en una consulta
        Query consulta=hibernateSession.createQuery("from Esquema");
        lista=consulta.list(); 
        return "delSchem" ;//se redirige a delSchem.xhtml
    }
    //recibe el nombre de la tabla que va a eliminar   
    public String DeleteSchem(String nombre){
    //inicializa funciones para hibernate
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession(); 
        Transaction t=hibernateSession.beginTransaction(); 
    //Carga tupla de la tabla Esquema elegido por "nombre" 
        Esquema schem=(Esquema)hibernateSession.load(Esquema.class,nombre);
        hibernateSession.delete(schem);//funcion para borrar
        //manda la accion 
        t.commit(); 

        return "output2" ;//se redirige a output2.xhtml
    } 
    //recibe el nombre de la tabla que va a modificar 
    public String ModifySchem(String nombre,String cadena){
    //inicializa funciones para hibernate
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession(); 
        Transaction t=hibernateSession.beginTransaction(); 
    //Carga tupla de la tabla Esquema elegido por "nombre" 
        Esquema schem=(Esquema)hibernateSession.load(Esquema.class, nombre);
    //funcion para colocar el valor en la base
        schem.setNombre(nombre);
        schem.setCadena(cadena);
        hibernateSession.update(schem);//funcion para actulizar
        //manda la accion 
        t.commit();
        return "output2";//se redirige a output2.xhtml
    }
    
    public String AddSchem(String nombre,String cadena){
    //inicializa funciones para hibernate
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession(); 
        Transaction t=hibernateSession.beginTransaction(); 
    //crea un objeto de tipo Esquema para guardar los parametros     
        Esquema schem = new Esquema();
        schem.setNombre(nombre);
        schem.setCadena(cadena);
        hibernateSession.save(schem);//funcion para guardar los valores en esquema
        //manda la accion
        t.commit();
        return "output2";//se redirige a output2.xhtml
    }
    /*controlador que manda a la vista modifySchem guardando el nombre del Esquema 
    que fue seleccionado en ese momento y poder ser usado por la vista    */
    
    public String SaveIdModifySchem(String nombre,String cadena) {
        return "modifySchem";//se redirige a modifySchem.xhtml
    }
    
    /*controlador que manda a la vista addToGroup guardando el nombre del esquema 
    que fue seleccionado en ese momento y poder ser usado por la vista    */
    public String SaveIdAddGroup(String nombre) {
        this.nombre=nombre;
        return "addToGroup";//se redirige a addToGroup.xhtml
    }
    //agrega el esquema al grupo, el grupo fue guardado por SaveIdAddGroup
    public String AddSchemToG(String nombre,String nombreG){
    //Inicializa funciones para hibernate    
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession();
        Transaction t=hibernateSession.beginTransaction();
    /*crea objetos de tipo Esquema y de tipo Grupo cargando los valores de las 
        tuplas de las tablas seleccionadas*/
        Esquema schem=(Esquema)hibernateSession.load(Esquema.class, nombre);
        Grupo group=(Grupo)hibernateSession.load(Grupo.class,nombreG);
        schem.getGrupos().add(group);//funcion que guarda los archivos en la relacion muchos a muchos
        //manda la accion
        t.commit(); 
        return "output2";//se redirige a output2.xhtml
    }
    
}

