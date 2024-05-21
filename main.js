$(document).ready(function(){
    $('#meuFormulario').validate({
      rules: {
        nome: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        mensagem: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        nome: {
          required: "Por favor, insira seu nome",
          minlength: "Seu nome deve ter pelo menos 2 caracteres"
        },
        email: {
          required: "Por favor, insira seu email",
          email: "Por favor, insira um email válido"
        },
        mensagem: {
          required: "Por favor, insira uma mensagem",
          minlength: "Sua mensagem deve ter pelo menos 10 caracteres"
        }
      },
      submitHandler: function(form) {
        alert("Formulário enviado com sucesso, Obrigado!");
        form.submit();
      }
    });
});