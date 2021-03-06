document.addEventListener("deviceready", onDeviceReady, false);
    
    var db = window.openDatabase("lunakin", "1.0", "lunakin DB", 200000); //will create database Dummy_DB or open it
 	//alert("fdf");
    //function will be called when device ready
    function onDeviceReady(){
    //alert("dfdfddff");
        db.transaction(populateDB, errorCB, successCB);
    }
 
    //create table and insert some record
    function populateDB(tx) {
		//alert("changos");
		tx.executeSql("DROP TABLE IF EXISTS prueba;");
		tx.executeSql("DROP TABLE IF EXISTS fase_lunar;");
		tx.executeSql("DROP TABLE IF EXISTS eclipse;");
		tx.executeSql("DROP TABLE IF EXISTS decreto;");
		tx.executeSql("DROP TABLE IF EXISTS lfc;");
		
        tx.executeSql( 'CREATE TABLE prueba ("fecha" DATETIME, "sol_signo" VARCHAR, "horario_verano" VARCHAR, estacion VARCHAR, aspecto_astrologico VARCHAR, "luna_signo" VARCHAR, "decreto" VARCHAR, "id_prueba" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE );');
		tx.executeSql( 'CREATE TABLE fase_lunar ("fecha_inicio" DATETIME,  "fecha_fin" DATETIME ,"nombre_fase" VARCHAR,"signo_imagen" VARCHAR, "signo_descripcion" VARCHAR, "aspecto_astrologico" VARCHAR, "num_lunacion" VARCHAR, "id_fase_lunar" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE );');
		tx.executeSql( 'CREATE TABLE eclipse ("fecha" DATETIME,  "tipo" VARCHAR ,"hora" VARCHAR,"signo_imagen" VARCHAR, "signo_descripcion" VARCHAR, "id_eclipse" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE );');
		tx.executeSql( 'CREATE TABLE decreto ("fecha" DATETIME,  "decreto" VARCHAR , "id_decreto" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE );');
		tx.executeSql( 'CREATE TABLE lfc ("fecha" DATETIME,  "lfc_inicio" VARCHAR , "lfc_fin" VARCHAR , "id_lfc" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE );');
		
		//alert("se creo la tabla ddd");
        tx.executeSql('INSERT INTO prueba (fecha, sol_signo,horario_verano,estacion, aspecto_astrologico,luna_signo,decreto) VALUES ("13-12-2013","sagitario","si","otoño","una prueba","capricornio","valla al concierto")'  );
		tx.executeSql('INSERT INTO prueba (fecha, sol_signo,horario_verano,estacion, aspecto_astrologico,luna_signo,decreto) VALUES ("15-12-2013","capricornio","no","invierno","una prueba dos","escorpion","america bicampeon")'  );
		tx.executeSql('INSERT INTO prueba (fecha, sol_signo,horario_verano,estacion, aspecto_astrologico,luna_signo,decreto) VALUES ("16-12-2013","acuario","si","otoño","una prueba tres","picis","america subcampeon")'  );
		
		tx.executeSql('INSERT INTO fase_lunar (fecha_inicio, fecha_fin, nombre_fase, signo_imagen, signo_descripcion, aspecto_astrologico,num_lunacion) VALUES ("05-12-2013","18-12-2013", "Luna creciente","2","tauro","prueba 1", "1");'  );
//		tx.executeSql('INSERT INTO fase_lunar (fecha_inicio, fecha_fin, nombre_fase, signo_imagen, signo_descripcion, aspecto_astrologico,num_lunacion) VALUES ("17-12-2013","31-12-2013", "Luna nueva","3","geminis","prueba 2, "2")' );
		console.log("se va a insertar eclipse");
		tx.executeSql('INSERT INTO eclipse (fecha, tipo, hora, signo_imagen, signo_descripcion) VALUES ("17-12-2013","Lunar", "4hrs", "3","geminis")'  );
		console.log("primer registro");
		tx.executeSql('INSERT INTO eclipse (fecha, tipo, hora, signo_imagen, signo_descripcion) VALUES ("18-12-2013","Solar", "5hrs","2","tauro")'  );
		tx.executeSql('INSERT INTO eclipse (fecha, tipo, hora, signo_imagen, signo_descripcion) VALUES ("19-12-2013","Lunar", "9hrs","3","geminis")'  );
		console.log("segundo registro");
		
		tx.executeSql('INSERT INTO decreto (fecha, decreto) VALUES ("17-12-2013","Hoy sera un buen dia")'  );
		tx.executeSql('INSERT INTO decreto (fecha, decreto) VALUES ("18-12-2013","Mañana sera mejor")'  );
		tx.executeSql('INSERT INTO decreto (fecha, decreto) VALUES ("19-12-2013","Un buen dia para negociar")'  );
		
		
		tx.executeSql('INSERT INTO lfc (fecha, lfc_inicio, lfc_fin) VALUES ("17-12-2013","0:22","10:37")'  );
		tx.executeSql('INSERT INTO lfc (fecha, lfc_inicio, lfc_fin) VALUES ("18-12-2013","6:02","12:30")'  );
		tx.executeSql('INSERT INTO lfc (fecha, lfc_inicio, lfc_fin) VALUES ("19-12-2013","13:22","19:09")'  );
		
		
		
		
		
        //tx.executeSql('INSERT INTO SoccerPlayer(Name,Club) VALUES ("Van Persie", "Arsenal")');
    }
 
    //function will be called when an error occurred
    function errorCB(err) {
		console.log(err);
        //alert("Error processing SQL: "+err.code);
    }
 
    //function will be called when process succeed
    function successCB() {
        //alert("success!");
        //db.transaction(queryDB,errorCB);
    }
 
    //select all from SoccerPlayer
    function queryFaseLunar(tx){
        tx.executeSql('SELECT * FROM fase_lunar where ? BETWEEN fecha_inicio AND fecha_fin ',[hoy],SuccessFaseLunar,errorCB);        
    }
	
	
	function queryEclipse(tx){
        tx.executeSql('SELECT * FROM eclipse where fecha= ?',[hoy],SuccessEclipse,errorCB);
    }
	
	
	function queryDecreto(tx){
        tx.executeSql('SELECT * FROM decreto where fecha= ?',[hoy],SuccessDecreto,errorCB);
    }
	
	function queryLfc(tx){
        tx.executeSql('SELECT * FROM lfc where fecha= ?',[hoy],SuccessLfc,errorCB);
    }
	
    function SuccessFaseLunar(tx,result){
    	
        //$('#SoccerPlayerList').empty();
       // alert("antes");
        var i=0;
       // $.each(result.rows,function(index,value){
        		//console.log(result.rows.length);
        		//alert(result.rows.item.length);
        		//alert(index);
        		//alert(value);
        		//alert(result.rows.item(0)['sol_signo']);
				//alert(result.rows.item(0)['estacion']);
        		//alert(result.rows.item(1)['Name']);
			//	alert("correct");
			if (result.rows.item(0)) {
			   var row = result.rows.item(0);
				//$("#sol_signo").html(row['sol_signo']);
				//$("#estacion").html(row['estacion']);
				$("#detalle_faseLunar").html( row['nombre_fase'] + " "+ row['signo_descripcion']);
				$("#aspecto_astrologico").html( row['aspecto_astrologico']);
				$("#imagen_signo").removeClass().addClass("z-"+ row['signo_imagen'] +" position-fixed");
				$("#fase_lunar").html( row['nombre_fase'] + " en "+ row['signo_descripcion']);
				$("#sol_signo").html("Sol en signo: "+ row['signo_descripcion']);
				//$("#imagen_signo").remove;
            i++;
			}else{
				$("#detalle_faseLunar").html();
				$("#aspecto_astrologico").html();
				$("#imagen_signo").removeClass();
				$("#fase_lunar").html();
				$("#sol_signo").html();
			}
           
            //$('#SoccerPlayerList').append('<li><a href="#"><h3 class="ui-li-heading">'+row['Name']+'</h3><p class="ui-li-desc">Club '+row['Club']+'</p></a></li>');
       // });
 
        //$('#SoccerPlayerList').listview();
    }
	
	
	
	function SuccessEclipse(tx,result){     
			if (typeof result.rows.item(0) != 'undefined') {
				var row = result.rows.item(0);
				//alert( row['tipo'] );
				$("#eclipse").html( row['tipo'] );
			}else{
				$("#eclipse").html();
			}
    }
	
	
	
	function SuccessDecreto(tx,result){
			if (typeof result.rows.item(0) != 'undefined') {
				var row = result.rows.item(0);
				$("#decreto").html( row['decreto'] );
			}else{
				$("#decreto").html();
			}
    }
	
	
	function SuccessLfc(tx,result){
			if (typeof result.rows.item(0) != 'undefined') {
				//alert("LFC");
				var row = result.rows.item(0);
				$("#lfc").html("LFC "+ row['lfc_inicio'] +" - "+ row['lfc_fin']);
			}else{
				$("#lfc").html();
			}
    }