//Carrossel
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});

//Formularios 

	function enviar_cadastro() { //funcao do evento de click para enviar
			var name_cadastro = document.frm_cadastro.txt_name_cadastro.value;
			var email_cadastro = document.frm_cadastro.txt_email_cadastro.value;
			var cpf_cadastro = document.frm_cadastro.txt_cpf_cadastro.value;
			var celular_cadastro = document.frm_cadastro.txt_celular_cadastro.value;
			var telefone_cadastro = document.frm_cadastro.txt_telefone_cadastro.value;
			var rua_cadastro = document.frm_cadastro.txt_rua_cadastro.value;
			var bairro_cadastro = document.frm_cadastro.txt_bairro_cadastro.value;
			var numero_cadastro = document.frm_cadastro.txt_numero_cadastro.value;
			var senha_cadastro = document.frm_cadastro.txt_senha_cadastro.value;
			
			if(name_cadastro != "" && email_cadastro != "" && cpf_cadastro != "" && celular_cadastro != "" 
			&& telefone_cadastro != "" && rua_cadastro != "" && bairro_cadastro != "" && numero_cadastro != "" && senha_cadastro != "") {
				alert("Cadastro realizado com sucesso!");
				window.location = "homepage.html";
				
			} else {
				alert("Preencha todos os campos!");
				limpar_cadastro();
			}
		}
		
		function limpar_cadastro() {
			document.frm_cadastro.txt_name_cadastro.value = "";
			document.frm_cadastro.txt_email_cadastro.value = "";
			document.frm_cadastro.txt_telefone_cadastro.value = "";
			document.frm_cadastro.txt_celular_cadastro.value = "";
			document.frm_cadastro.txt_cpf_cadastro.value = "";
			document.frm_cadastro.txt_rua_cadastro.value = "";
			document.frm_cadastro.txt_numero_cadastro.value = "";
			document.frm_cadastro.txt_bairro_cadastro.value = "";
			document.frm_cadastro.txt_senha_cadastro.value = "";
			
			document.frm_cadastro.txt_name_cadastro.focus();
		}
		
		
		function login() { //funcao do evento de click para enviar
			var email_login = document.frm_login.txt_email_login.value;
			var senha_login = document.frm_login.txt_senha_login.value;
			
			if(email_login != "" && senha_login != "") {
				window.location = "agendamento_servicos.html";
				
			} else {
				alert("Campos em branco! Insira o email e a senha");
			}
		}
		
		
		
		function alterar_cadastro() { //funcao do evento de click para enviar
			var name_cadastro = document.frm_cadastro.txt_name_cadastro.value;
			var email_cadastro = document.frm_cadastro.txt_email_cadastro.value;
			var cpf_cadastro = document.frm_cadastro.txt_cpf_cadastro.value;
			var celular_cadastro = document.frm_cadastro.txt_celular_cadastro.value;
			var telefone_cadastro = document.frm_cadastro.txt_telefone_cadastro.value;
			var rua_cadastro = document.frm_cadastro.txt_rua_cadastro.value;
			var bairro_cadastro = document.frm_cadastro.txt_bairro_cadastro.value;
			var numero_cadastro = document.frm_cadastro.txt_numero_cadastro.value;
			var senha_cadastro = document.frm_cadastro.txt_senha_cadastro.value;
			
			if(name_cadastro != "" && email_cadastro != "" && cpf_cadastro != "" && celular_cadastro != "" 
			&& telefone_cadastro != "" && rua_cadastro != "" && bairro_cadastro != "" && numero_cadastro != "" && senha_cadastro != "") {
				alert("Cadastro atualizado com sucesso!");
		}
		
		}
		//formulario pet
		
		function cadastrar_pet(){ 
			var nome_pet = document.frm_cadastro_pet.txt_nome_pet_cadastro.value;
			var idade_pet = document.frm_cadastro_pet.txt_idade_pet_cadastro.value;
			var especificacoes_pet = document.frm_cadastro_pet.txt_especificacao_pet_cadastro.value;
			var descricao_pet= document.frm_cadastro_pet.txt_descricao_pet_cadastro.value;
			
			
			if(nome_pet != "" && idade_pet != ""  && descricao_pet != "") {
				alert("Cadastro realizado com sucesso!");
				window.location = "meus_pets.html";
				
			} else {
				alert("Preencha todos os campos!");
				limpar_pet();
			}
			
		}
		
		function limpar_pet(){
			document.frm_cadastro_pet.txt_nome_pet_cadastro.value = "";
			document.frm_cadastro_pet.txt_idade_pet_cadastro.value = "";
			document.frm_cadastro_pet.txt_descricao_pet_cadastro.value = "";
			
			
			document.frm_cadastro_pet.txt_nome_pet_cadastro.focus();
		}
		
		function finalizar_compra(){
			alert("Você deve fazer login para finalizar a compra");
		}
		
		function finalizar_compra2(){
			alert("Solicitação de Compra realizada. Você receberá uma notificação por email");
		}
		
		function solicitar_agendamento(){
			
			var txt_agendamento_dia = document.frm_agendamento_pet.txt_dia_agendamento.value;
			var txt_agendamento_hora = document.frm_agendamento_pet.txt_horario_agendamento.value;
			
			if( txt_agendamento_dia != "" && txt_agendamento_hora != "")
			{	
			alert("Você solicitou um agendamento e receberá a confirmação por email!");
			window.location = "agendamento_servicos.html";
			}
			
			else{
			alert("Preencha todas as informações!!");
			}
			}
		
		
		
		
		

