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
    Document   : RHEDUF55ReportesAdicionalesCapacitacion0
    Created on : Jan 19, 2013
    Author     : CVER
 */


mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.panelReportesAdicionalesRHEDUF5501 = {
    activeItem: 1,
    layout: {
        type: 'absolute'
    },
    frame: true,
    title: 'Reportes adicionales de capacitaci\u00f3n',
    items: [
        {
            xtype: 'fieldset',
            height: 389,
            width: 230,
            layout: {
                type: 'vbox'
            },
            title: 'Reporte',
            x: 0,
            y: 0,
            items: [
                {
                    xtype: 'radio',
                    id: 'rdoCursosProgRealiza01',
                    height: 30,
                    boxLabel: 'Cursos programados y realizados',
                    name: 'rdosRepor1',
                    flex: 1,checked:true,
                    listeners:{
                        checked:function(rdo, checked){
                            if(checked){
//                               mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.dynamicColumns
                    Ext.getCmp('grpReportesAdicionales01').reconfigure(new Ext.data.JsonStore(), mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.dynamicColumns('EDU55R03'));
                            }
                        }
                    }
                    
                },
                {
                    xtype: 'radio',
                    id: 'rdoPersonalCapac01',
                    height: 30,
                    boxLabel: 'Personal capacitado',
                    name: 'rdosRepor1',
                    flex: 1,
                    listeners:{
                        checked:function(rdo,checked){
                            if(checked){
                                Ext.getCmp('grpReportesAdicionales01').reconfigure(new Ext.data.JsonStore(), mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.dynamicColumns('EDU55R0'));
                            }
                        }
                    }
                },
                {
                    xtype: 'radio',
                    id: 'rdoHorasCapac01',
                    height: 30,
                    boxLabel: 'Horas de capacitaci\u00f3n',
                    name: 'rdosRepor1',
                    flex: 1,
                    listeners:{
                        checked:function(rdo,checked){
                            if(checked){
                                
                            }
                        }
                    }
                },
                {
                    xtype: 'radio',
                    id: 'rdoPresupuestoCapacitacion01',
                    height: 25,
                    boxLabel: 'Presupuesto de capacitaci\u00f3n',
                    name: 'rdosRepor1',
                    flex: 1,
                    listeners:{
                        checked:function(rdo,checked){
                            if(checked){
                                
                            }
                        }
                    }
                },
                {
                    xtype: 'radio',
                    id: 'rdoPersonalSinCapac01',
                    height: 25,
                    boxLabel: 'Personal sin capacitar',
                    name: 'rdosRepor1',
                    flex: 1,
                    listeners:{
                        checked:function(rdo,checked){
                            if(checked){
                                
                            }
                        }
                    }
                },
                {
                    xtype: 'radio',
                    id: 'rdoPersonal01',
                    height: 35,
                    boxLabel: 'Personal que no ha programado cursos',
                    name: 'rdosRepor1',
                    flex: 1,
                    listeners:{
                        checked:function(rdo,checked){
                            if(checked){
                                
                            }
                        }
                    }
                },
                {
                    xtype: 'radio',
                    id: 'rdoCursosPorCompetenciasProgramadosRealizados01',
                    height: 35,
                    boxLabel: 'Cursos por competencias programados y realizados',
                    name: 'rdosRepor1',
                    flex: 1,
                    listeners:{
                        checked:function(rdo,checked){
                            if(checked){
                                
                            }
                        }
                    }
                },
                {
                    xtype: 'radio',
                    id: 'rdoCursosRegPorCompe01',
                    height: 25,
                    boxLabel: 'Cursos registrados por competencia',
                    name: 'rdosRepor1',
                    flex: 1,
                    listeners:{
                        checked:function(rdo,checked){
                            if(checked){
                                
                            }
                        }
                    }
                },
                {
                    xtype: 'radio',
                    id: 'rdoCursosEfecPorCompetencia01',
                    height: 25,
                    boxLabel: 'Cursos efectuados por competencia',
                    name: 'rdosRepor1',
                    flex: 1,
                    listeners:{
                        checked:function(rdo,checked){
                            if(checked){
                                
                            }
                        }
                    }
                },
                {
                    xtype: 'radio',
                    id: 'rdoPersonalRegCursosPorCompetencia01',
                    height: 40,
                    boxLabel: 'Personal registrado en cursos por competencia',
                    name: 'rdosRepor1',
                    flex: 1,
                    listeners:{
                        checked:function(rdo,checked){
                            if(checked){
                                
                            }
                        }
                    }
                },
                {
                    xtype: 'radio',
                    id: 'rdoPersonalConCursosEfecPorCompe01',
                    height: 35,
                    boxLabel: 'Personal con cursos efectuados por competencia',
                    name: 'rdosRepor1',
                    flex: 1,
                    listeners:{
                        checked:function(rdo,checked){
                            if(checked){
                                
                            }
                        }
                    }
                }
            ]
        },
        {
            xtype: 'fieldset',
            height: 109,
            title: 'Criterios de selecci\u00f3n',
            x: 240,
            y: 0,
            items: [
                {
                    xtype: 'container',
                    id: 'containerProg1',
                    height: 30,
                    layout: {
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'label',
                            width: 55,
                            text: 'Programa:'
                        },
                        { 
                            xtype           : 'combo',
                            id              : 'cmbPrograma01',
                            name            : 'cvePrograma',
                            triggerAction   : 'all',
                            mode            : 'local',
                            displayField    : 'cvePrograma',
                            valueField      : 'cvePrograma',
                            minChars        : 1,
                            flex            : 1,
                            typeAhead       : true,
                            lazyRender      : true,                                            
                            enableKeyEvents : true,
                            editable        : true,
                            forceSelection  : true,
                            autocomplete    : true,
                            selectOnFocus   : true,
                            style           : {textTransform:"uppercase"},
                            listWidth       : 500,
                            width           : 100,
                            autoCreate      : {tag: 'input', type: 'text',maxlength: '6'},
                            tpl             : '<tpl for="."><div class="x-combo-list-item">{cvePrograma} - {descripcion}</div></tpl>',
                            store           : mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.jsConsultaProgramasRHEDUF55,
                            listeners       : {
                                 select     : function(a,record){
                                     if (Ext.isEmpty(this.getValue())){
                                         Ext.getCmp('txtDescPrograma01').reset();
                                     }else{
                                         Ext.getCmp('txtDescPrograma01').setValue(record.get('descripcion'));
                                     }
                                 },
                                  blur      : function(e,record,o){
                                     if (Ext.isEmpty(this.getValue())){
                                         Ext.getCmp('txtDescPrograma01').reset();
                                     }
                                 } 
                            }
                        },
                        {
                            xtype: 'spacer',
                            width: 5,
                            flex: 1
                        },
                        {
                            xtype: 'textfield',
                            disabled: true,
                            id: 'txtDescPrograma01',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'spacer',
                    height: 15
                },
                {
                    xtype: 'container',
                    height: 30,
                    width: 160,
                    layout: {
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'spacer',
                            width: 5,
                            flex: 1
                        },
                        {
                            xtype: 'label',
                            width: 51,
                            text: 'Ejercicio:'
                        },
                        {
                            xtype: 'spinnerfield',
                            id: 'spinEjercicio01',
                            allowDecimals: false,
                            autoCreate: {tag: 'input', type: 'text', maxlength: '4'},
                            value: (new Date()).format('Y'),
                            minValue: '1900',
                            maxValue: '2500',
                            accelerate: true,
                            enableKeyEvents: true,
                            width: 100,
                            flex: 1
                        }
                    ]
                }
            ]
        },
       mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.grpReportesAdicionales01()
    ]
}