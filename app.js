const popup_close = document.querySelector('.popup_close')
const popup_Ref = document.querySelector('.popup_Message')
const popup_Content = document.querySelector('.popup_content')
const count_Items_Ref = document.querySelector('.count_Items')
const final_Score_Ref = document.querySelector('.final_Score')
console.log(popup_Ref.classList)

const array_answers = ['B','A','C','A','B']
let count_Score = 0
let count_Items = 0

const form = document.querySelector('.user_action')

const insert_Content = data_In => {}
 
form.addEventListener('submit',event => {
    event.preventDefault()
    const input_Names = [
        form.q_number_1.value,
        form.q_number_2.value,
        form.q_number_3.value,
        form.q_number_4.value,
        form.q_number_5.value
    ]
//console.log(input_Names)//Exibe os valores das opções escolhidas;
    input_Names.forEach((element,index) => {
        if(element === array_answers[index]){
            count_Score += 20
            count_Items += 1
        }
    })
        
 
popup_Ref.style.display = 'block'
// popup_Ref.setAttribute('class','display: block')

count_Items_Ref.textContent = `Voce acertou: ${count_Items} questões.`
final_Score_Ref.textContent = `O valor total é: ${count_Score} pontos.`
})

popup_close.addEventListener('click', event => {
    event.stopPropagation()
    // popup_Ref.setAttribute('style','display: none')
    popup_Ref.style.display = 'none'

    
})

 


































































































































/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, tente fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

Depois de fazer o que foi pedido acima, crie um repositório no GitHub para a sua aplicação e abra uma issue no repositório do curso com:

- O link da sua versão do quiz;
- Quais foram as suas maiores dúvidas ou dificuldades durante a execução desse exercício;
- Quais foram as suas menores dificuldades durante a execução desse exercício.

Link do repositório do curso: https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo/issues

Ps: se você não conseguiu fazer tudo o que foi pedido acima, abra a issue mesmo assim =)
*/
