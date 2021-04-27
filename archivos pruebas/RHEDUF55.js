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


MyTabPanelUi = Ext.extend(Ext.TabPanel, {
    id: 'tabPanelRHEDUF55',
    autoWidth: true,
    height: 473,
    width: 844,
    activeItem: 1,
    frame: true,
    activeTab: 1,
    listeners           : { 
        tabchange: function(th, panel) {
            if(panel.id == 'panelRepoCapacitacion0'){
//                mx.com.lobos.serper.capacit.rheduf02.consultaUsuariosJsonStore1.load({
//                    params:{
//                        cascada:'consultaUsuarios'
//                    }
//                })
            }
        }
    },

    initComponent: function() {
        this.items = [
            mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.panelReportesRHEDUF550,
            mx.com.lobos.js.admrh.edu.consultas.RHEDUF55.panelReportesAdicionalesRHEDUF5501
        ];
        this.tbar = {
            xtype: 'toolbar',
            id: 'tbarReportesCapac',
            autoWidth: true,
            items: [
                {
                    text    :'Consultar',
                    iconCls : 'silk-table-go',
                    handler : function(){
                        if(Ext.getCmp('panelRepoCapacitacion0').isVisible()==true){
                            takeRequestTab1();
                        }else{
                            
                        }
                    }
                },'-',
                {
                   text    :'Limpiar',
                   iconCls : 'silk-page-white',
                   handler:function(){
                        if(Ext.getCmp('panelRepoCapacitacion0').isVisible()==true){
                            clearTab1();
                        }else{
                            
                        }
                       
                   }
                },'-',
                {
                    xtype: 'button',
                    text: 'Prever',
                    iconCls:'fugue-report',
                    handler:function(){
                        execReportsRHEDUF55(Ext.getCmp('rdoRelacionCursosArea0').getGroupValue());
                    }
                }
            ]
        };
        MyTabPanelUi.superclass.initComponent.call(this);
    }
});

MyTabPanel = Ext.extend(MyTabPanelUi, {
    initComponent: function() {
        MyTabPanel.superclass.initComponent.call(this);
    }
});

MyJsonStore = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        MyJsonStore.superclass.constructor.call(this, Ext.apply({
            storeId: 'MyJsonStore'
        }, cfg));
    }
});

Ext.onReady(function() {
    Ext.QuickTips.init();
    var store = new MyJsonStore();
    var cmp1 = new MyTabPanel({
        renderTo: Ext.getBody()
    });
    cmp1.show();
});