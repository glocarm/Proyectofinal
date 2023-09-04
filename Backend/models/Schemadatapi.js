const  { Schema , model}= require('mongoose');
const SchemaDatapi=new Schema ({
    id: { 
        type: Number,
    },
    title: { 
        type: String,
    },
    price: { 
        type: Number,
    },

    category: {
        id: Number,
        name: String,
        image: String
    },
    images: []
});

const DataApi = model('DataApi', SchemaDatapi );

module.exports=DataApi ;