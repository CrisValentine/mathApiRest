/*___________________________________________________________________
  |            COPYRIGHT © BY                                         	|
  |            DERECHOS RESERVADOS © POR                              	|
  |            LOBO SOFTWARE S.A. DE  C.V.                            	|
  |                                                                   	|
  | Ninguna parte de esta obra, parcial o total puede                 	|
  | ser reproducida o trasmitida, mediante ningún sistema             	|
  | o método electrónico o mecánico (incluyendo el                    	|
  | fotocopiado, la grabación, o cualquier sistema de                	|
  | recuperación y almacenamiento de información),                    	|
  | SIN LA AUTORIZACION POR ESCRITO DEL AUTOR.                        	|
  |                                                                   	|
  | Derechos reservados                                               	|
  | © 1999, LOBO SOFTWARE, S.A. DE C.V.                               	|
  |                             (*)                                   	|
  | Esta obra forma parte del Lobo-RH © "RECURSOS HUMANOS"            	|
  |                                                                   	|
  | (*) Marca registrada por                                          	|
  | LOBO SOFTWARE, S.A. DE C.V.                                       	|
  |_____________________________________________________________________|
    Document   : RHRCAF42
    Created on : Dec 05, 2011
    Author     : CVER
*//*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package mx.com.lobos.store.admpag.rca.clasificadores.credenciales;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import mx.com.lobos.rh.util.ReflexionUtil;
import mx.com.lobos.service.admpag.rca.clasificadores.credenciales.CredencialesAsistenciasService;

/**
 *
 */
public class ConsultaCredencialesAsistenciasStore extends HttpServlet {

    /** 
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        String strJSONData = "";
        HashMap<String,String> parametrosHsm = null;
        HttpSession session = request.getSession();
        CredencialesAsistenciasService credencialesService=null;
        try {
            parametrosHsm = new HashMap<String,String>();
            parametrosHsm = (HashMap<String, String>)ReflexionUtil.requestToMap(request);
            parametrosHsm.put("strUsuarioSession", session.getAttribute("Usuario").toString());
            
            parametrosHsm.put("paginar", request.getParameter("paginar"));
            parametrosHsm.put("limite", request.getParameter("limite"));
            parametrosHsm.put("start", request.getParameter("start"));
            parametrosHsm.put("cascada", request.getParameter("cascada"));
            parametrosHsm.put("cveUsuario", request.getParameter("cveUsuario"));
            parametrosHsm.put("tipoCredencial", request.getParameter("tipoCredencial"));
            parametrosHsm.put("numeroCredencial", request.getParameter("numeroCredencial"));
            parametrosHsm.put("consecutivoCredencial", request.getParameter("consecutivoCredencial"));

            credencialesService=new CredencialesAsistenciasService();
            strJSONData=credencialesService.consultaCredenciales(parametrosHsm);
            out.print(strJSONData);
        } catch (Exception e) {
            String strMensaje = e.getMessage().trim();
            out.print("{\"success\":false,\"message\":\""+ strMensaje +"\",\"data\":[]}");
        }
    } 
        
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /** 
     * Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /** 
     * Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /** 
     * Returns a short description of the servlet.
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
