/*
 * 
 *    ___________________________________________________________________
 *   |            COPYRIGHT (C) BY                                         |
 *   |            DERECHOS RESERVADOS (C) POR                              |
 *   |            LOBO SOFTWARE S.A. DE  C.V.                            |
 *   |                                                                   |
 *   | Ninguna parte de esta obra, parcial o total puede                 |
 *   | ser reproducida o transmitida, mediante ningún sistema            |
 *   | o método electrónico o mecánico (incluyendo el                    |
 *   | fotocopiado, la grabación, o cualquier sistema de                 |
 *   | recuperación y almacenamiento de información),                    |
 *   | SIN LA AUTORIZACION POR ESCRITO DEL AUTOR.                        |
 *   |                                                                   |
 *   | Derechos reservados                                               |
 *   | (C) 2012, LOBO SOFTWARE, S.A. DE C.V.                               |
 *   |                             (*)                                   |
 *   | Esta obra forma parte del SIAL-CH (C) "Capital Humano"              |
 *   |                                                                   |
 *   | (*) Marca registrada por                                          |
 *   | LOBO SOFTWARE, S.A. DE C.V.                                       |
 *   |___________________________________________________________________|
 *   
 *   Document   : ClasificacionesCursosFacadeService
 *   Created on : Oct 1, 2012, 5:41:36 PM
 *   Author     : MFOB
 *   Fecha modificacion 11/10/12 CVER se modificaron los metodos de insercion, eliminacion, actualizacion 
 *   
 */
package mx.com.lobos.serper.capacit.clasificadores.clasificacionescursos.service;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import mx.com.lobos.ex.LoboException;
import mx.com.lobos.ex.MsgError;
import mx.com.lobos.serper.capacit.clasificadores.clasificacionescursos.dao.ClasificacionesCursosDao;
import mx.com.lobos.util.Conexion;
import mx.com.lobos.util.ConvierteObjetos;
import mx.com.lobos.util.EncryptAES;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.commons.dbutils.DbUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.MapListHandler;

/**
 *
 * @author marioo
 */
public class ClasificacionesCursosFacadeService {
    
    protected static final MsgError     MSG_ERROR       = new MsgError();
    protected static final EncryptAES   ENCRYPT_AES     = new EncryptAES();
    protected static final QueryRunner  QUERY_RUNNER    = new QueryRunner();
    
    public String clasificacionesCursos(HashMap<String, String> parametrosHsm) throws LoboException{
        String      jsonData,
                    cascada,
                    message         = "",
                    strUsuarioSession;
        Object      pruebaObj       = null;
        List        pruebaList;
        Integer     total           = 0;
        Connection  capacitacionCon = null;
        try{
            
            strUsuarioSession   = ENCRYPT_AES.decrypt(parametrosHsm.get("strUsuarioSession"));
            capacitacionCon     = Conexion.getConexionLoboRH(strUsuarioSession);
            cascada             = parametrosHsm.get("cascada");
            
            if(cascada.equals("consultaClasificacionesCursosFiltroRango")){
                message     = "Consulta exitosa.";
                pruebaList  = this.consultaClasificacionesCursosFiltroRango(parametrosHsm, capacitacionCon);
                total       = pruebaList.size();
                pruebaObj   = pruebaList;
            }else if(cascada.equals("insertaClasificacionesCursos")){
                message = "Datos insertados con &eacute;xito.";
                total   = 0;
                this.insertaClasificacionesCursos(parametrosHsm, capacitacionCon);
            }else if(cascada.equals("actualizaClasificacionesCursos")){
                message = "Datos actualizados con &eacute;xito.";
                total   = 0;
                this.actualizaClasificacionesCursos(parametrosHsm, capacitacionCon);
            }else if(cascada.equals("eliminaClasificacionesCursos")){
                message = "Datos eliminados con &eacute;xito.";
                total   = 0;
                this.eliminaClasificacionesCursos(parametrosHsm, capacitacionCon);
            }else if(cascada.equals("clasificacionesCursos")){
                message     = "Consulta exitosa.";
                pruebaList  = this.consultaClasificacionesCursos(parametrosHsm, capacitacionCon);
                total       = pruebaList.size();
                pruebaObj   = pruebaList;
            }
            
            jsonData = ConvierteObjetos.generaJsonString(true, message, total, pruebaObj);
            
        }catch(Exception ex){
            throw new LoboException(MSG_ERROR.getMsgError(ex, "clasificacionesCursos"));
        }finally{
            try{
                DbUtils.closeQuietly(capacitacionCon);
            }catch(Exception ex){
                throw new LoboException(MSG_ERROR.getMsgError(ex, "clasificacionesCursos"));
            }
        }
        return jsonData;
    }
    
    public List consultaClasificacionesCursosFiltroRango(HashMap<String, String> parametrosHsm, Connection capacitacionCon) throws LoboException{
        List    consultaList            = null,
                parametrosConsultaList  = new ArrayList();
        Integer intStart,
                intLimite;
        try{
            
            intStart        = Integer.parseInt(parametrosHsm.containsKey("start") ? parametrosHsm.get("start").toString() : "0") + 1;
            consultaList    = QUERY_RUNNER.query(capacitacionCon, ClasificacionesCursosDao.getTotalClasificacionesCursos(), new MapListHandler(), parametrosConsultaList.toArray());
            intLimite       = Integer.parseInt(consultaList.size() > 0 ? ((HashMap<String, String>) consultaList.get(0)).get("TOTAL") : "0");
            
            if(parametrosHsm.containsKey("start") && parametrosHsm.get("start").equals("S")){
                intLimite = Integer.parseInt(parametrosHsm.get("limite").toString());
                intLimite = intStart + intLimite;
            }
            
            parametrosConsultaList.clear();
            parametrosConsultaList.add(intStart);
            parametrosConsultaList.add(intLimite);
            consultaList = QUERY_RUNNER.query(capacitacionCon, ClasificacionesCursosDao.getClasificacionesCursosFiltroRango(), new MapListHandler(), parametrosConsultaList.toArray());
            
        }catch(Exception ex){
            throw new LoboException(MSG_ERROR.getMsgError(ex, "consultaClasificacionesCursosFiltroRango"));
        }
        return consultaList;
    }
    
    public void insertaClasificacionesCursos(HashMap<String, String> parametrosHsm, Connection capacitacionCon) throws LoboException{
        List parametrosConsultaList = new ArrayList();
        String      strUsuarioSession;
        JSONArray   jsonClasificaciones;
        JSONObject  clasificacionesObj;
        try{
            strUsuarioSession = ENCRYPT_AES.decrypt(parametrosHsm.get("strUsuarioSession").toString());
            jsonClasificaciones = JSONArray.fromObject("[" + parametrosHsm.get("data").replace("[", "").replace("]", "") + "]");
            for(int i = 0, total = jsonClasificaciones.size(); i < total; i++){
                clasificacionesObj = jsonClasificaciones.getJSONObject(i);
                parametrosConsultaList.clear();
                parametrosConsultaList.add(clasificacionesObj.getString("cveClasificacionCurso"));
                parametrosConsultaList.add(clasificacionesObj.getString("descripcion"));
                parametrosConsultaList.add(strUsuarioSession);
                QUERY_RUNNER.update(capacitacionCon, ClasificacionesCursosDao.getInsertaClasificacionesCursos(), parametrosConsultaList.toArray());
            }
        }catch(Exception ex){
            throw new LoboException(MSG_ERROR.getMsgError(ex, "insertaClasificacionesCursos"));
        }
    }
    
    public void actualizaClasificacionesCursos(HashMap<String, String> parametrosHsm, Connection capacitacionCon) throws LoboException{
        List parametrosConsultaList = new ArrayList();
        String      strUsuarioSession;
        JSONArray   jsonClasificaciones;
        JSONObject  clasificacionesObj;
        try{
            strUsuarioSession = ENCRYPT_AES.decrypt(parametrosHsm.get("strUsuarioSession").toString());
            jsonClasificaciones = JSONArray.fromObject("[" + parametrosHsm.get("data").replace("[", "").replace("]", "") + "]");
            for(int i = 0, total = jsonClasificaciones.size(); i < total; i++){
                clasificacionesObj = jsonClasificaciones.getJSONObject(i);
                parametrosConsultaList.clear();
                parametrosConsultaList.add(clasificacionesObj.containsKey("descripcion") ? clasificacionesObj.getString("descripcion") : "");
                parametrosConsultaList.add(strUsuarioSession);
                parametrosConsultaList.add(clasificacionesObj.containsKey("cveClasificacionCurso") ? clasificacionesObj.getString("cveClasificacionCurso") : "");
                QUERY_RUNNER.update(capacitacionCon, ClasificacionesCursosDao.getActualizaClasificacionesCursos(), parametrosConsultaList.toArray());
            }
        }
        catch(Exception ex){
            throw new LoboException(MSG_ERROR.getMsgError(ex, "actualizaClasificacionesCursos"));
        }
    }
    
    public void eliminaClasificacionesCursos(HashMap<String, String> parametrosHsm, Connection capacitacionCon) throws LoboException{
        List parametrosConsultaList = new ArrayList();
        List parametrosConsultaList2 = new ArrayList();
        JSONArray   jsonClasificaciones;
        JSONObject  clasificacionesObj;
        try{
            jsonClasificaciones = JSONArray.fromObject("[" + parametrosHsm.get("data").replace("[", "").replace("]", "") + "]");
            for(int i = 0, total = jsonClasificaciones.size(); i < total; i++){
                clasificacionesObj = jsonClasificaciones.getJSONObject(i);
                parametrosConsultaList.clear();
                parametrosConsultaList.add(clasificacionesObj.containsKey("cveClasificacionCurso") ? clasificacionesObj.getString("cveClasificacionCurso"): "");
                parametrosConsultaList2 = QUERY_RUNNER.query(capacitacionCon, ClasificacionesCursosDao.getqConsultaCveClasificacionCurso(), new MapListHandler(), parametrosConsultaList.toArray()); 
                if(parametrosConsultaList2.size() > 0) {
                    throw new Exception("No es posible eliminar una clasificaci\u00f3n de cursos que ya est\u00e1 asignada .");
                }
                QUERY_RUNNER.update(capacitacionCon, ClasificacionesCursosDao.getEliminaClasificacionesCursos(), parametrosConsultaList.toArray());
            }
        }
        catch(Exception ex){
            throw new LoboException(MSG_ERROR.getMsgError(ex, "eliminaClasificacionesCursos"));
        }
    }
    
    public List consultaClasificacionesCursos(HashMap<String, String> parametrosHsm, Connection capacitacionCon) throws LoboException{
        List consultaList = null;
        try{
            consultaList = QUERY_RUNNER.query(capacitacionCon, ClasificacionesCursosDao.getConsultaClasificacionesCursos(), new MapListHandler());
        }catch(Exception ex){
            throw new LoboException(MSG_ERROR.getMsgError(ex, "consultaClasificacionesCursos"));
        }
        return consultaList;
    }
    
}
