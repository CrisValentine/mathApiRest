/* 
   _____________________________________________________________________
  |            COPYRIGHT (C) BY                                         |
  |            DERECHOS RESERVADOS (C) POR                              |
  |            LOBO SOFTWARE S.A. DE  C.V.                            	|
  |                                                                   	|
  | Ninguna parte de esta obra, parcial o total puede                 	|
  | ser reproducida o transmitida, mediante ningun sistema             	|
  | o metodo electronico o mecanico (incluyendo el                    	|
  | fotocopiado, la grabacion, o cualquier sistema de                	|
  | recuperacion y almacenamiento de informacion),                    	|
  | SIN LA AUTORIZACION POR ESCRITO DEL AUTOR.                        	|
  |                                                                   	|
  | Derechos reservados                                               	|
  | © 2012, LOBO SOFTWARE, S.A. DE C.V.                               	|
  |                             (*)                                   	|
  | Esta obra forma parte del SIAL-CH (C) "CAPITAL HUMANO"            	|
  |                                                                   	|
  | (*) Marca registrada por                                          	|
  | LOBO SOFTWARE, S.A. DE C.V.                                       	|
  |_____________________________________________________________________|
    Document   : RHEDUF55Functions
    Created on : Jan 19, 2013
    Author     : CVER
 */
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.programado = "%"
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.enProceso = "%"
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.efectuado = "%"
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.cancelados = "%"
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.cerrado = "%"
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.count = 0
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.reportType = ""
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.dynamicGridRepo = ""
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.recordFields = {
    jsConsultaAreasRecordFields : [
        {name: 'clave'},
        {name: 'descripcion'}
    ],
    jsConsultaCursosRecordFields : [
        {name: 'claveCurso'},
        {name: 'descripcion'}
    ],
    estadosProgramacionesRecordFieldsRHEDUF55 : [
        {name: 'cveEstadoProgramacion'},
        {name: 'descripcion'}
    ],
    jsConsultaDataReportesRecordFields : [
        {name: 'cveArea'},
        {name: 'descArea'},
        {name: 'cveEmpleado'},
        {name: 'nombre'},
        {name: 'cveCurso'},
        {name: 'descCurso'},
        {name: 'iniCurso'},
        {name: 'finCurso'},
        {name: 'tipoCurso'},
        {name: 'descTipoCurso'},
        {name: 'modalidad'},
        {name: 'descModalidad'},
        {name: 'acredito'},
        
    ],
     programasRecordFieldsRHEDUF55 : [
        {name: 'cvePrograma'},
        {name: 'descripcion'}
    ]
}

mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.jsEstadosPrograRHEDUF55 = new Ext.data.ArrayStore({
    fields: mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.recordFields.estadosProgramacionesRecordFieldsRHEDUF55,
    data:   [['CANC', 'CANCELADO'],
            ['EFEC' , 'EFECTUADO'],
            ['PROG' , 'PROGRAMADO'],
            ['PROC' , 'EN PROCESO'],
            ['CER'  , 'CERRADO']]
});

mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.jsAreasRHEDUF55 = new Ext.data.JsonStore({
    url             : '/' + mx.com.lobos.util.form.getAplication() + '/AreasResponsabilidadStore.x',
    baseParams      : {
        cascada     : 'consultaAreasRHEDUF55'
    },
    root            : 'data',
    fields          : mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.recordFields.jsConsultaAreasRecordFields,
    successProperty : 'success',
    totalProperty   : 'total',
    autoLoad        : true
});
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.jsCursosRHEDUF55 = new Ext.data.JsonStore({
    url             : '/' + mx.com.lobos.util.form.getAplication() + '/ConsultaCursosCapacitacionStore.x',
    baseParams      : {
        cascada     : 'consultaCursosRHEDUF55'
    },
    root            : 'data',
    fields          : mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.recordFields.jsConsultaCursosRecordFields,
    successProperty : 'success',
    totalProperty   : 'total',
    autoLoad        : true
});
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.jsRepoDataRHEDUF55 = new Ext.data.JsonStore({
    url             : '/' + mx.com.lobos.util.form.getAplication() + '/consultaDataReportesCapacitacionStore.x',
    baseParams      : {
        cascada     : 'getDataRepoRHEDUF55'
    },
    root            : 'data',
    fields          : mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.recordFields.jsConsultaDataReportesRecordFields,
    successProperty : 'success',
    totalProperty   : 'total'
});
    
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.colModel = [ 
    {header: "\u00c1rea",width:120,sortable: true,dataIndex:'cveArea'},
    {header: "Nombre",width:200,sortable: true,dataIndex:'descArea'},
    {header: "Expediente",width: 100,sortable: true,dataIndex: 'cveEmpleado'},
    {header: "Nombre",width: 200,sortable: true,dataIndex: 'nombre'},
    {header: "Curso",width: 100,sortable: true,dataIndex: 'cveCurso'},
    {header: "Nombre del curso",width: 200,sortable: true,dataIndex: 'descCurso'},
    {header: "Fecha inicio",width: 100,sortable: true,dataIndex: 'iniCurso'},
    {header: "Fecha fin",width: 100,sortable: true,dataIndex: 'finCurso'},
    {header: "Tipo curso",width: 100,sortable: true,dataIndex: 'tipoCurso'},
    {header: "Descripci\u00f3n",width: 200,sortable: true,dataIndex: 'descTipoCurso'},
    {header: "Modalidad",width: 100,sortable: true,dataIndex: 'modalidad'},
    {header: "Descripci\u00f3n",width: 100,sortable: true,dataIndex: 'descModalidad'},
    {header: "Acredit\u00f3",width: 100,sortable: true,dataIndex: 'acredito'}
]

function takeRequestTab1(){
    var statusGrp = "";
        Ext.each(Ext.getCmp('grpEstatusCurso0').getSelectionModel().getSelections(),function(record){
            statusGrp+="'"+record.get("cveEstadoProgramacion")+"',";
        }); 
        if(!Ext.isEmpty(statusGrp)){
            statusGrp= statusGrp.substring(0,statusGrp.length-1);
        }

        mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.jsRepoDataRHEDUF55.load({
            params:{
                cveArea     : Ext.value(Ext.getCmp('cmbArea0').getValue(),'%'),
                cveCurso    : Ext.value(Ext.getCmp('cmbCurso0').getValue(),'%'),
                fechaInicio : Ext.getCmp('dateInicial0').getRawValue(),
                fechaFin    : Ext.getCmp('dateFinal0').getRawValue(),
                ordenamiento: Ext.getCmp('rdoOrdenamientoArea0').getGroupValue(),
                estadosProgramacion : statusGrp
            }
        });
}
function clearTab1(){
   Ext.getCmp('dateInicial0').reset();
   Ext.getCmp('dateFinal0').reset();
   Ext.getCmp('cmbArea0').reset();
   Ext.getCmp('cmbCurso0').reset();
   Ext.getCmp('txtDescArea0').reset();
   Ext.getCmp('txtDescCurso0').reset();
   Ext.getCmp('rdoRelacionCursosArea0').reset();
   Ext.getCmp('rdoOrdenamientoArea0').reset();
   Ext.getCmp('grpReportesCapac0').store.removeAll();
   Ext.getCmp('grpEstatusCurso0').getSelectionModel().clearSelections();
}

mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.sm  = new Ext.grid.CheckboxSelectionModel({
    checkOnly : true,
    listeners:{
        rowSelect:function(model,rowIndex,record){
            if(mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.sm.getCount() !== Ext.getCmp('grpEstatusCurso0').store.getCount()){
                Ext.fly(Ext.getCmp('grpEstatusCurso0').getView().innerHd).child('div.x-grid3-hd-checker').removeClass('x-grid3-hd-checker-on');
            }else{
                Ext.fly(Ext.getCmp('grpEstatusCurso0').getView().innerHd).child('div.x-grid3-hd-checker').addClass('x-grid3-hd-checker-on');
            }
        },
        selectionchange:function(sm){
            if(sm.getCount() !== Ext.getCmp('grpEstatusCurso0').store.getCount()){
                Ext.fly(Ext.getCmp('grpEstatusCurso0').getView().innerHd).child('div.x-grid3-hd-checker').removeClass('x-grid3-hd-checker-on');
            }else{
                Ext.fly(Ext.getCmp('grpEstatusCurso0').getView().innerHd).child('div.x-grid3-hd-checker').addClass('x-grid3-hd-checker-on');
            }
        }
    }
});

mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.colModelEstatus = [
    mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.sm,
    {header: "Estatus",width:120,sortable: true,dataIndex:'cveEstadoProgramacion'},
    {header: "descripcion",width:300,sortable: true,dataIndex:'descripcion'},
    
]

function execReportsRHEDUF55(reportType){
    var url             = '../../../MuestraReporte.x?mod=admrh&rpt=',
        titulo          = "", 
        nombreReporte   = "",
        parametros      = "",
        statusGrp       = "";
            Ext.each(Ext.getCmp('grpEstatusCurso0').getSelectionModel().getSelections(),function(record){
                statusGrp+="'"+record.get("cveEstadoProgramacion")+"',";
            }); 
            if(!Ext.isEmpty(statusGrp)){
                statusGrp= statusGrp.substring(0,statusGrp.length-1);
            }
       parametros   = '&P_AREA='+Ext.value(Ext.getCmp('cmbArea0').getValue(), encodeURIComponent('%'));
       parametros  += '&P_CURSO='+Ext.value(Ext.getCmp('cmbCurso0').getValue(), encodeURIComponent('%'));
       parametros  += '&P_FECHAINICIO='+Ext.value(Ext.getCmp('dateInicial0').getRawValue(), encodeURIComponent('%'));
       parametros  += '&P_FECHAFIN='+Ext.value(Ext.getCmp('dateFinal0').getRawValue(), encodeURIComponent('%'));
       parametros  += '&P_EDOPROGRAMACION='+Ext.value(statusGrp, "'CANC','EFEC','PROG','PROC','CER'");
       parametros  += '&P_ORDENAMIENTO='+Ext.getCmp('rdoOrdenamientoArea0').getGroupValue();
    if(reportType =='A'){
        titulo = '&titulo=REPORTES DE CAPACITACIÓN CURSOS POR AREA'
        nombreReporte = "EDU_55R01";
        window.open( url + nombreReporte + parametros + titulo, 'Reporte_' + (new Date().format('dMY_His')).toString());        
    }else if (reportType =='B'){
        titulo = '&titulo=REPORTES DE CAPACITACIÓN CURSOS POR EMPLEADO'
        nombreReporte = "EDU_55R02";
        window.open( url + nombreReporte + parametros + titulo, 'Reporte_' + (new Date().format('dMY_His')).toString());
    }
}
//----
mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.jsConsultaProgramasRHEDUF55 = new Ext.data.JsonStore({
   url             : '/' + mx.com.lobos.util.form.getAplication() + '/ProgramasCapacitacionStore.x',
            baseParams      : {
                cascada     : 'consultaProgramasCapacitacionRHEDUF51'
            },
            root            : 'data',
            fields          : mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.recordFields.programasRecordFieldsRHEDUF55,
            successProperty : 'success',
            totalProperty   : 'total',
            autoLoad        : true,
            listeners       : {
                load:function(store,records,options){
                    if(store.getCount()!= 0){
                        Ext.getCmp('cmbPrograma01').setValue(records[0].data.cvePrograma);
                        Ext.getCmp('txtDescPrograma01').setValue(records[0].data.descripcion);
                    }
                }
            }
});

mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.dynamicColumns = function(optionColumn) {
   var columnsGrp = {};
   switch(optionColumn){
        case 'EDU55R03':
            columnsGrp = [
                    {header: "Mes",width:100,sortable: true,dataIndex:'mesR03'},
                    {header: "Abiertos reg",width:100,sortable: true,dataIndex:'cursosAP'},
                    {header: "Abiertos real",width:100,sortable: true,dataIndex:'cursosAE'},
                    {header: "Cerrados reg",width:100,sortable: true,dataIndex:'cursosCE'},
                    {header: "Cerrados real",width:100,sortable: true,dataIndex:'cursosCP'},
                    {header: "Externos reg",width:100,sortable: true,dataIndex:'cursosEE'},
                    {header: "Externos real",width:100,sortable: true,dataIndex:'cursosEP'},
                ]
            break;
        case 'EDU55R04':
            columnsGrp = [
                    {header: "Mes",width:100,sortable: true,dataIndex:'mesR04'},
                    {header: "Asistentes reg",width:100,sortable: true,dataIndex:'asistentesP'},
                    {header: "Asistentes real",width:100,sortable: true,dataIndex:'cursosAE'},
                    {header: "Participantes reg",width:100,sortable: true,dataIndex:'cursosCE'},
                    {header: "Participantes real",width:100,sortable: true,dataIndex:'cursosCP'}
                ]
            break;
         case 'EDU55R05':
            columnsGrp = [
                    {header: "Mes",width:100,sortable: true,dataIndex:'mesR05'},
                    {header: "Horas reg",width:100,sortable: true,dataIndex:'horasP'},
                    {header: "Horas real",width:100,sortable: true,dataIndex:'horasR'}
                ]
            break;
         case 'EDU55R06':
            columnsGrp = [
                    {header: "Mes",width:100,sortable: true,dataIndex:'mesR06'},
                    {header: "Presupuesto prog",width:100,sortable: true,dataIndex:'presupuestoP'},
//                    {header: "Acumulado prog",width:100,sortable: true,dataIndex:'presupuestoP'},
                    {header: "Presupuesto real",width:100,sortable: true,dataIndex:'presupuestoR'}
            ]
            break;
         case 'EDU55R07':
            columnsGrp = [
                    {header: "Empleado",width:100,sortable: true,dataIndex:'cveEmpleado'},
                    {header: "Nombre",width:100,sortable: true,dataIndex:'nombre'},
                    {header: "\u00c1rea",width:100,sortable: true,dataIndex:'cveArea'},
                    {header: "Descripci\u00f3n",width:100,sortable: true,dataIndex:'descripcion'}
            ]
            break;
         case 'EDU55R08':
            columnsGrp = [
                    {header: "Clave",width:100,sortable: true,dataIndex:'cveEmpleado'},
                    {header: "Descripcion competencia",width:200,sortable: true,dataIndex:'nombre'},
                    {header: "Reg Ene",width:100,sortable: true,dataIndex:'progEne'},
                    {header: "Real Ene",width:100,sortable: true,dataIndex:'realEne'},
                    {header: "Reg Feb",width:100,sortable: true,dataIndex:'progFeb'},
                    {header: "Real Feb",width:100,sortable: true,dataIndex:'realFeb'},
                    {header: "Reg Mar",width:100,sortable: true,dataIndex:'progMar'},
                    {header: "Real Mar",width:100,sortable: true,dataIndex:'realMar'},
                    {header: "Reg Abr",width:100,sortable: true,dataIndex:'progAbr'},
                    {header: "Real Abr",width:100,sortable: true,dataIndex:'realAbr'},
                    {header: "Reg May",width:100,sortable: true,dataIndex:'progMay'},
                    {header: "Real May",width:100,sortable: true,dataIndex:'realMay'},
                    {header: "Reg May",width:100,sortable: true,dataIndex:'progMay'},
                    {header: "Real May",width:100,sortable: true,dataIndex:'realMay'},
                    {header: "Reg Jun",width:100,sortable: true,dataIndex:'progJun'},
                    {header: "Real Jun",width:100,sortable: true,dataIndex:'realJun'},
                    {header: "Reg Jul",width:100,sortable: true,dataIndex:'progJul'},
                    {header: "Real Jul",width:100,sortable: true,dataIndex:'realJul'},
                    {header: "Reg Ago",width:100,sortable: true,dataIndex:'progAgo'},
                    {header: "Real Ago",width:100,sortable: true,dataIndex:'realAgo'},
                    {header: "Reg Sep",width:100,sortable: true,dataIndex:'progSep'},
                    {header: "Real Sep",width:100,sortable: true,dataIndex:'realSep'},
                    {header: "Reg Oct",width:100,sortable: true,dataIndex:'progOct'},
                    {header: "Real Oct",width:100,sortable: true,dataIndex:'realOct'},
                    {header: "Reg Nov",width:100,sortable: true,dataIndex:'progNov'},
                    {header: "Real Nov",width:100,sortable: true,dataIndex:'realNov'},
                    {header: "Reg Nov",width:100,sortable: true,dataIndex:'progNov'},
                    {header: "Real Nov",width:100,sortable: true,dataIndex:'realNov'},
                    {header: "Reg Dec",width:100,sortable: true,dataIndex:'progDec'},
                    {header: "Real Dec",width:100,sortable: true,dataIndex:'realDec'}
            ]
            break;
        case 'EDU55R09':
        columnsGrp = [
                {header: "Competencia",width:100,sortable: true,dataIndex:'cveCompetencia'},
                {header: "Descripci\u00f3n",width:200,sortable: true,dataIndex:'descComp'},
                {header: "Programaci\u00f3n grupo",width:100,sortable: true,dataIndex:'cveProgramacionGrupo'},
                {header: "programa",width:100,sortable: true,dataIndex:'cvePrograma'},
                {header: "Descripci\u00f3n",width:200,sortable: true,dataIndex:'cveCursoCapacitacion'},
                {header: "Curso",width:100,sortable: true,dataIndex:'descCurso'},
                {header: "Descripci\u00f3n",width:200,sortable: true,dataIndex:'fechaInicio'},
                {header: "Fecha inicial",width:100,sortable: true,dataIndex:'fechaFin'},
                {header: "Fecha final",width:100,sortable: true,dataIndex:'horario'},
                {header: "Horario",width:100,sortable: true,dataIndex:'realizado'},
        ]
            break;
        case 'EDU55R10':
        columnsGrp = [
                {header: "Competencia",width:100,sortable: true,dataIndex:'cveCompetencia'},
                {header: "Descripci\u00f3n",width:200,sortable: true,dataIndex:'descCompetencia'},
                {header: "Empleado",width:100,sortable: true,dataIndex:'cveEmpleadoPracticante'},
                {header: "nombre",width:100,sortable: true,dataIndex:'nombre'},
                {header: "\u00c1rea",width:200,sortable: true,dataIndex:'cveArea'},
                {header: "Descripci\u00f3n",width:200,sortable: true,dataIndex:'descripcionArea'},
        ]
            break;
    }
    return new Ext.grid.ColumnModel({
                columns: columnsGrp
    })
}

mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.colModelEDU55R03 = [
    {header: "Mes",width:100,sortable: true,dataIndex:'mes'},
    {header: "Abiertos reg",width:100,sortable: true,dataIndex:'cursosAP'},
    {header: "Abiertos real",width:100,sortable: true,dataIndex:'cursosAE'},
    {header: "Cerrados reg",width:100,sortable: true,dataIndex:'cursosCE'},
    {header: "Cerrados real",width:100,sortable: true,dataIndex:'cursosCP'},
    {header: "Externos reg",width:100,sortable: true,dataIndex:'cursosEE'},
    {header: "Externos real",width:100,sortable: true,dataIndex:'cursosEP'},
    
]

mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.grpReportesAdicionales01 =  function(){
    return new Ext.grid.EditorGridPanel({
        id: 'grpReportesAdicionales01',
        height: 280,
        loadMask:true,
        stripeRows:true,
        columnLines:true,
        frame: true,
        title: 'Grupos ocupacionales',
        titleCollapse: true,
        store: new Ext.data.JsonStore(),
        x: 240,
        y: 110,
        colModel:mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.dynamicColumns('EDU55R03')
       
    })
}
//mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.grpReporGridEDU55R03 = function(){
//        return new Ext.form.grid.EditorGridPanel({
//        id          : 'grpReportesAdicionales01',
//        height      : 280,
//        loadMask    : true,
//        stripeRows  : true,
//        columnLines : true,
//        frame       : true,
//        titleCollapse:true,
//        store       : new Ext.data.JsonStore(),
//        x           : 0,
//        y           : 150,
//        columns     :mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.dynamicColumns('optionColumn')
//    })
//    
//}