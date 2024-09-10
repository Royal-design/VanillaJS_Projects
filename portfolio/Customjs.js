$(document).ready(function (){
    $('#click').click(function (){
        $('#alert').show('fade')
        setInterval(() => {
           $('#alert').hide('fade')
        }, 2000);
    })
    $('#close').click(function (){
        $('#alert').hide('fade')
    })
    $('#click').tooltip({
        title: 'click',
        placement:'right'
    })
})