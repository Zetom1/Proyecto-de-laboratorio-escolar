package Actions;
//lista de bibliotecas
import entity.HibernateUtil;
import entity.Grupo;
import entity.Usuarios;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
//termina lista 
@ManagedBean(name="adminGroupManagedBean")//nombre con el que sera reconocido por los xhtml
@SessionScoped
public class AdminGroupManagedBean implements Serializable{
private List lista;   
private String nombre;
//lista de getter y setter
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
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
        //se usa la tabla Grupo de la base y se guarda en una consulta
        Query consulta=hibernateSession.createQuery("from Grupo");
        lista=consulta.list(); 
    return "delGroup" ;//se redirige a delGroup.xhtml
    }
    //recibe el nombre de la tabla que va a eliminar
    public String DeleteGroup(String nombre){
    //inicializa funciones para hibernate
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession(); 
        Transaction t=hibernateSession.beginTransaction(); 
    //Carga tupla de la tabla grupo elegido por "nombre" 
        Grupo group=(Grupo)hibernateSession.load(Grupo.class,nombre);
        hibernateSession.delete(group);//funcion para borrar
        //manda la accion 
        t.commit(); 
 
    return "output1" ;//se redirige a output1.xhtml
    }    
    //recibe el nombre 
    public String ModifyGroup(String nombre){
    //inicializa funciones para hibernate
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession(); 
        Transaction t=hibernateSession.beginTransaction(); 
    //Carga tupla de la tabla grupo elegido por "nombre" 
        Grupo group=(Grupo)hibernateSession.load(Grupo.class,nombre);
        group.setNombre(nombre);//funcion para colocar el valor en la base
        hibernateSession.update(group);//funcion para actulizar
        //manda la accion
        t.commit();
        return "output1";//se redirige a output1.xhtml
    }
    /*la funcion para añadir grupo no recibe el nombre dado que fue gusrdado desde el 
    documento addGroup.xhtml*/
    public String AddGroup(){
    //inicializa funciones para hibernate
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession(); 
        Transaction t=hibernateSession.beginTransaction(); 
    //crea un objeto de tipo grupo para guardar los parametros     
        Grupo group = new Grupo();
        group.setNombre(nombre);
        hibernateSession.save(group);//funcion para guardar los valores en grupo
        //manda la accion
        t.commit();
        return "output1";//se redirige a output1.xhtml
    }
    /*controlador que manda a la vista addStudent guardando el nombre del grupo 
    que fue seleccionado en ese momento y poder ser usado por la vista    */
    public String SaveIdModifyGroup(String nombre) {
        this.nombre=nombre;
        return "addStudent";//se redirige a addStudent.xhtml
    }
    //agrega el estudiante al grupo, el grupo fue guardado por SaveIdModifyGroup
    public String AddStudent(int user,String nombreG){
    //Inicializa funciones para hibernate    
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession();
        Transaction t=hibernateSession.beginTransaction();
    /*crea objetos de tipo Usuarios y de tipo Grupo para el caso de Usuario se
      dio el nombre de usero, para marcar la diferencia y demostrar que ese es
      el objeto, cargando los valores de las tuplas de las tablas seleccionadas*/
        Usuarios usero=(Usuarios)hibernateSession.load(Usuarios.class, user);
        Grupo group=(Grupo)hibernateSession.load(Grupo.class,nombre);
        usero.getGrupos().add(group);//funcion que guarda los archivos en la relacion muchos a muchos
        //manda la accion
        t.commit(); 
        return "outputAE";//se redirige a outputAE.xhtml
    }
}