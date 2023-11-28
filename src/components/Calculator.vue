<script setup>
    import { ref } from 'vue'

    // constants

    const result = ref('0')
    const textBtn = ref('AC')
    const shotOne = ref(false)
    const plusMinusTrue = ref(false)
    const a = ref(0)
    const b = ref(0)
    const action = ref('')
    
    // numbers

    const one = () => {
        if(result.value == 0) {
            result.value = ''
        }
        textBtn.value = 'C'
        result.value +=1
    }
    const two = () => {
        if(result.value == 0) {
            result.value = ''
        }
        textBtn.value = 'C'
        result.value +=2
    }
    const three = () => {
        if(result.value == 0) {
            result.value = ''
        }
        textBtn.value = 'C'
        result.value +=3
    }
    const four = () => {
        if(result.value == 0) {
            result.value = ''
        }
        textBtn.value = 'C'
        result.value +=4
    }
    const five = () => {
        if(result.value == 0) {
            result.value = ''
        }
        textBtn.value = 'C'
        result.value +=5
    }
    const six = () => {
        if(result.value == 0) {
            result.value = ''
        }
        textBtn.value = 'C'
        result.value +=6
    }
    const seven = () => {
        if(result.value == 0) {
            result.value = ''
        }
        textBtn.value = 'C'
        result.value +=7
    }
    const eight = () => {
        if(result.value == 0) {
            result.value = ''
        }
        textBtn.value = 'C'
        result.value +=8
    }
    const nine = () => {
        if(result.value == 0) {
            result.value = ''
        }
        textBtn.value = 'C'
        result.value +=9
    }
    const zero = () => {
        if(result.value === '0') {
            return
        }
        result.value +=0
    }
    const shot = () => {
        if(shotOne.value === true) {
            return
        }
        if(result.value !== '') {
            textBtn.value = 'C'
            result.value += ','
            shotOne.value = true
        }
        
    }

    // additional functions

    const ac = () => {
        result.value = '0'
        textBtn.value = 'AC'
        shotOne.value = false
        b.value = 0
        a.value = 0
    }
    const plusMinus = () => {
        if(plusMinusTrue.value !== true) {
            result.value = '-' + result.value
            plusMinusTrue.value = true
            return
        }
        if(plusMinusTrue.value === true) {
            plusMinusTrue.value = false
            result.value = result.value.replace(/-/g, '')
            return
        }
    }
    const percent = () => {
        result.value /= 100
    }
    const lastNumDeleate = () => {
        result.value = result.value.slice(0, -1)
        if(result.value === '') {
            result.value = '0'
        }
    }
    
    // operations

    const division = () => {
        a.value = result.value.toString()
        result.value = '0'
        action.value = 1
    }
    const multiply = () => {
        a.value = result.value.toString()
        result.value = '0'
        action.value = 2
    }
    const minus = () => {
        a.value = result.value.toString()
        result.value = '0'
        action.value = 3
    }
    const plus = () => {
        a.value = result.value.toString()
        result.value = '0'
        action.value = 4
    }
    const equals = () => {
        b.value = result.value.toString()
        if(action.value == '1') {
            result.value = Number(a.value) / Number(b.value)
        }
        if(action.value == '2') {
            result.value = Number(a.value) * Number(b.value)
        }
        if(action.value == '3') {
            result.value = Number(a.value) - Number(b.value)
        }
        if(action.value == '4') {
            result.value = Number(a.value) + Number(b.value)
        }
        a.value = result.value.toString()
    }
</script>

<template>
    <div class="calculator">
        <h1 v-on:click="lastNumDeleate">{{ result }}</h1>
        <button 
            class="up-btn" 
            id="ac"
            v-on:click="ac"
        >
                {{ textBtn }}
        </button>
        <button 
            class="up-btn" 
            id="plus-minus"
            v-on:click="plusMinus"
        >
            ±
        </button>
        <button 
            class="up-btn" 
            id="percent"
            v-on:click="percent"
        >
            %
        </button>
        <button 
            class="signs-btn" 
            id="division"
            v-on:click="division"
        >
            ÷
        </button>
        <button 
            class="num-btn" 
            id="one"
            v-on:click="one"
        >
            1
        </button>
        <button 
            class="num-btn" 
            id="two"
            v-on:click="two"
        >
            2
        </button>
        <button 
            class="num-btn" 
            id="three"
            v-on:click="three"
        >
            3
        </button>
        <button 
            class="signs-btn" 
            id="multiply"
            v-on:click="multiply"
        >
            ×
        </button>
        <button 
            class="num-btn" 
            id="four"
            v-on:click="four"
        >
            4
        </button>
        <button 
            class="num-btn" 
            id="five"
            v-on:click="five"
        >
            5
        </button>
        <button 
            class="num-btn" 
            id="six"
            v-on:click="six"
        >
            6
        </button>
        <button 
            class="signs-btn" 
            id="minus"
            v-on:click="minus"
        >
            -
        </button>
        <button 
            class="num-btn" 
            id="seven"
            v-on:click="seven"
        >
            7
        </button>
        <button 
            class="num-btn" 
            id="eight"
            v-on:click="eight"
        >
            8
        </button>
        <button 
            class="num-btn" 
            id="nine"
            v-on:click="nine"
        >
            9
        </button>
        <button 
            class="signs-btn" 
            id="plus"
            v-on:click="plus"
        >
            +
        </button>
        <button 
            class="num-btn" 
            id="zero"
            v-on:click="zero"
        >
            0
        </button>
        <button 
            class="num-btn" 
            id="shot"
            v-on:click="shot"
        >
            ,
        </button>
        <button 
            class="signs-btn" 
            id="equals"
            v-on:click="equals"
        >
            =
        </button>
    </div>
</template>

<style>
    body {
        margin: 0;
    }

    .calculator {
        height: 445px;
        width: 297px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background: #000;
        padding: 88px 13px 13px;
        margin: 0 auto;
    }

    #zero {
        padding-right: 100px;
        text-align-last: left;
        padding-left: 30px;
    }

    #ac {
        font-size: 25px;
    }

    h1 {
        width: 270px;
        height: 55px;
        text-align: end;
        font-size: 68px;
        font-family: sans-serif;
        font-weight: 100;
        line-height: 58px;
        margin: 0;
        padding-bottom: 20px;
        letter-spacing: -4px;
        padding-right: 15px;    
        color: #fff;
        user-select: none;
        overflow: hidden;
    }
</style>