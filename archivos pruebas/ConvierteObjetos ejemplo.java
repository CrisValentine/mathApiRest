/*--
   _____________________________________________________________________
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
    Documento  : ConvierteObjetos
    Created on : Sep 17, 2010, 12:54:15 PM
    Author     : JSG
--*/

package mx.com.lobos.rh.util;

import java.util.List;
import net.sf.json.JSONArray;


public class ConvierteObjetos {
    /**
     * Genera un String en formato JSON
     * @param obj Lista generalmente formada de Mapas o VO
     * @param parametros Lista de parametros para configuracion de la cadena, el
     * orden de los parametros debe de ser el siguiente: 
     * <br/>0: Mensaje de JSON
     * <br/>1: indicador del contenido del JSON, genetalmente va data
     * <br/>2: Numero del total, se usa para formatear el paginador, si no se usa
     * va el valor de 0
     * @return <code>String</code> en formato JSON 
     * @exception Genera un <code>String</String> en formato JSON para indicar error
     */
    public String ListAJSON(List obj, List parametros){
        StringBuilder strBuilder=new StringBuilder();
        JSONArray array = new JSONArray();
        try {
            array.add(obj);
            strBuilder.append("{\"success\":true,\"message\":\"");
            strBuilder.append(parametros.get(0));
            strBuilder.append("\",\"total\":");
            strBuilder.append(parametros.get(2));
            strBuilder.append(",\"").append(parametros.get(1)).append("\":[");
            strBuilder.append(array.toString(2).replace("[", "").replace("]", ""));
            strBuilder.append("]}");
        } catch (Exception e) {
            strBuilder.append("{\"success\":false,\"message\":\"");
            strBuilder.append("Ocurrio un error");
            strBuilder.append("\",\"total\":");
            strBuilder.append("0");
            strBuilder.append("\",\"data\":\"\"}");
        }finally{
            return strBuilder.toString();
        }
    }

    /**
     * Genera un String en formato JSON
     * @param parametros
     * Lista de parametros para configuracion de la cadena, el
     * orden de los parametros debe de ser el siguiente: 
     * <br/>0: Mensaje de JSON
     * <br/>1: indicador del contenido del JSON, genetalmente va data
     * <br/>2: Numero del total, se usa para formatear el paginador, si no se usa
     * va el valor de 0
     * <br/>3: Valor del data, regularmente el valor se pone en [], ya que solo 
     * sirve para avisar de un mensaje exitoso
     * @return <code>String</code> en formato JSON 
     * @exception Genera un <code>String</String> en formato JSON para indicar error
     */
    public String successJSON(List parametros){
        StringBuilder strBuilder=new StringBuilder();

        try {
            strBuilder.append("{\"success\":true,\"message\":\"");
            strBuilder.append(parametros.get(0));
            strBuilder.append("\",\"total\":");
            strBuilder.append(parametros.get(2));
            strBuilder.append(",\"").append(parametros.get(1)).append("\":");
            strBuilder.append(parametros.get(3));
            strBuilder.append("}");
        } catch (Exception e) {
            strBuilder.append("{\"success\":false,\"message\":\"");
            strBuilder.append("Ocurrio un error");
            strBuilder.append("\"}");
        }finally{
            return strBuilder.toString();
        }
    }
    public String ListAString(List obj){
        String strResultado = "";
         JSONArray array=new JSONArray();
            array.add(obj);
            strResultado = array.toString(2).replace("[", "").replace("]", "");
        return strResultado;
    }
    public String formateoAsignacionString(String raw){
        String format="";
        format=raw.replace("[\"", "").replace("\"]", "").replace("\"", "\'");
        return format;
    }

    public String JSONtoString(JSONArray obj, List parametros){
        StringBuilder strBuilder=new StringBuilder();
        try {
            strBuilder.append("{\"success\":true,\"message\":\"");
            strBuilder.append(parametros.get(0));
            strBuilder.append("\",\"total\":");
            strBuilder.append(parametros.get(2));
            strBuilder.append(",\"").append(parametros.get(1)).append("\":[");
            strBuilder.append(obj.toString().replace("[", "").replace("]", ""));
            strBuilder.append("]}");
        } catch (Exception e) {
            strBuilder.append("{\"success\":false,\"message\":\"");
            strBuilder.append("Ocurrio un error");
            strBuilder.append("\",\"total\":");
            strBuilder.append("0");
            strBuilder.append("\",\"data\":\"\"}");
        }finally{
            return strBuilder.toString();
        }
    }
    
    public String failureJSON(List parametros){
        StringBuilder strBuilder=new StringBuilder();

        try {
            strBuilder.append("{\"success\":false,\"message\":\"");
            strBuilder.append(parametros.get(0));
            strBuilder.append("\",\"total\":");
            strBuilder.append(parametros.get(2));
            strBuilder.append(",\"").append(parametros.get(1)).append("\":");
            strBuilder.append(parametros.get(3));
            strBuilder.append("}");
        } catch (Exception e) {
            strBuilder.append("{\"success\":false,\"message\":\"");
            strBuilder.append("Ocurrio un error ");
            strBuilder.append("\"}");
        }finally{
            return strBuilder.toString();
        }
    }
}
