package Actions;
//lista de bibliotecas
import entity.HibernateUtil;
import entity.Usuarios;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
 
@ManagedBean(name="adminManagedBean")//nombre con el que sera reconocido por los xhtml
@SessionScoped
public class AdminManagedBean implements Serializable{
private List lista;   
private int user,tipo;
private String nombre,apellido,pass;
//lista de getter y setter
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getUser() {
        return user;
    }

    public void setUser(int user) {
        this.user = user;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
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
        //se usa la tabla Usuarios de la base y se guarda en una consulta
        Query consulta=hibernateSession.createQuery("from Usuarios");
        lista=consulta.list(); 
        return "delAdmin" ;//se redirige a delAdmin.xhtml
    }

    public String DeleteUser(int id){
/*Se usa Id para no generar problemas con Usuarios user*/
    //inicializa funciones para hibernate
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession(); 
        Transaction t=hibernateSession.beginTransaction(); 
    //Carga tupla de la tabla Usuarios elegido por "id" 
        Usuarios user=(Usuarios)hibernateSession.load(Usuarios.class,id);
        hibernateSession.delete(user);
        t.commit(); 
 
    return "output1" ;//se redirige a output1.xhtml
    }    
    
    public String ModifyUser(int id){
/*Se usa Id para no generar problemas con Usuarios user*/
    //inicializa funciones para hibernate
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession(); 
        Transaction t=hibernateSession.beginTransaction(); 
    //Carga tupla de la tabla Usuarios elegido por "nombre" 
        Usuarios user=(Usuarios)hibernateSession.load(Usuarios.class, id);
        //guarda valores en usuario
        user.setNombre(nombre);
        user.setApellido(apellido);
        user.setPass(pass);
        hibernateSession.update(user);//funcion para actulizar
        t.commit();//manda la accion
        return "output1";//se redirige a output1.xhtml
    }
    
    public String AddUser(){
    //inicializa funciones para hibernate
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession(); 
        Transaction t=hibernateSession.beginTransaction(); 
    //crea un objeto de user Usuario para guardar los parametros     
        Usuarios user = new Usuarios();
        user.setNombre(nombre);
        user.setApellido(apellido);
        user.setPass(pass);
        user.setTipo(tipo);
        hibernateSession.save(user);//funcion para guardar los valores en grupo
        //manda la accion
        t.commit();
        return "output1";//se redirige a output1.xhtml
    }
    
    public String SaveIdModifyUser(int user) {
        this.user=user;
        return "modifyUser";//se redirige a output1.xhtml
    }
}