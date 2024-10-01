import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
export default function RTE({control}){
return (

    <Controller name="content" control={control} render={({field:{onChange}})=>(
        <Editor initialValue="default value" init={{branding:false,height:500,menubar:true}} onChange={onChange}/>

    )}/>

)
}