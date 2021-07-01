package ManagerBean;
//lista de bibliotecas
import entity.HibernateUtil;
import entity.Usuarios;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;
import org.hibernate.Session;
//termina lista
@ManagedBean
@RequestScoped
public class MB {

    private String id;
    private String password;
    private String nombre;
    private final HttpServletRequest request;
    private final FacesContext fc;
    private FacesMessage fm;
    private int tipo=0;
    
    public MB()     {//constructor
        fc= FacesContext.getCurrentInstance();//inicializa el FacesContext
        request = (HttpServletRequest)fc.getExternalContext().getRequest();//inicializa la solicitud del servlet
    }
    
    public String validate()    {//valida usuario
        Usuarios login=null;//crea un obejto de tipo Usuarios
    //inicializa funciones para hibernate
        Session hibernateSession;
        hibernateSession=HibernateUtil.getSessionFactory().openSession(); 
        hibernateSession.beginTransaction();
        if(id!=null && password!=null &&(!id.equals(""))&&(!password.equals(""))){//revisa que no sea nulo
            //busca en la base al usario con el id y contraseña indicada y lo guarda en login
            login=(Usuarios) hibernateSession.createQuery("from Usuarios where user='"+id+"'AND pass='"+password+"'").uniqueResult();
            if(login!=null)//sie el login no esta vacio permitara la siguiente accion
                setNombre(login.getNombre());//obtiene el nombre guardado en la base del objeto login y lo guarda 
        }
        else    {//si es vacio envia error 
            fm = new FacesMessage(FacesMessage.SEVERITY_ERROR,"Incorrecto",null);
            fc.addMessage(null, fm);
            return "input1";    //envia a input1.xhtml
        }
        if(login==null){//si el login esta vacio envia error
            fm = new FacesMessage(FacesMessage.SEVERITY_ERROR,"Incorrecto",null);
            fc.addMessage(null, fm);
        return "input1";//envia a input1.xhtml
        }
        //redirige segun el tipo de usuario
        if(login.getTipo()==1){//tipo 1 indica que se trata de un administrador
            request.getSession().setAttribute("sesionusuario", nombre);//coloca en la sesion el nombre del usuario
            fm = new FacesMessage(FacesMessage.SEVERITY_INFO,"Correcto",null);
            fc.addMessage(null, fm);
            return "MAdmin";//envia a MAdmin.xhtml
        }
            if(login.getTipo()==2){//tipo 2 indica que se trata de un profesor
            request.getSession().setAttribute("sesionusuario", nombre);//coloca en la sesion el nombre del usuario
            fm = new FacesMessage(FacesMessage.SEVERITY_INFO,"Correcto",null);
            fc.addMessage(null, fm);
            return "MProf";//envia a MProf.xhtml
        }
            if(login.getTipo()==3){//tipo 3 indica que se trata de un alumno
            request.getSession().setAttribute("sesionusuario", nombre);//coloca en la sesion el nombre del usuario
            fm = new FacesMessage(FacesMessage.SEVERITY_INFO,"Correcto",null);
            fc.addMessage(null, fm);
            return "MEst";//envia a MEst.xhtml
        }
        return "input1";
    }
//lista de getter y setter   
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
//termina lista
}

