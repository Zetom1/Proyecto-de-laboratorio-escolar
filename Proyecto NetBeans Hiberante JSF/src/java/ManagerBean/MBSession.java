package ManagerBean;
//lista de bibliotecas
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;
//termina lista
@ManagedBean
@RequestScoped
public class MBSession {
    
private String id;
private final HttpServletRequest request;
private final FacesContext fc;
private FacesMessage fm;

    public MBSession(){//constructor
        fc= FacesContext.getCurrentInstance();//inicializa el FacesContext
        request = (HttpServletRequest)fc.getExternalContext().getRequest();//inicializa la solicitud del servlet 
        if(request.getSession().getAttribute("sesionusuario")!=null){//revisa que el nombre no sea nulo
            id=(String)request.getSession().getAttribute("sesionusuario");////guarda en id el nombre del usuario
        }
    }
    public String cerrarSesion(){//cierra sesion
        request.getSession().removeAttribute("sesionusuario");//quita el atributo de la sesion
        fm = new FacesMessage(FacesMessage.SEVERITY_INFO,"sesion cerrada",null);//manda mensaje de sesion cerrada
        fc.addMessage(null, fm);    
        return "input1";//regresa a input1.xhtml
    }
    //getter y setter de id
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    
}
