function birthState(president) {
    let president_list = {
        'Barack Hussein Obama II':'Hawaii',
        'George Walker Bush':'Connecticut',
        'William Jefferson Clinton':'Arkansas',
        'George Herbert Walker Bush':'Massachussetts',
        'Ronald Wilson Reagan':'Illinois',
        'James Earl Carter, Jr':'Georgia'
    };
return(president_list[president]);
}

console.log(birthState('Ronald Wilson Reagan'));