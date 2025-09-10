import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Editor } from "@tinymce/tinymce-react";
import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/models/dom";
import "tinymce/plugins/advlist";
import "tinymce/plugins/autolink";
import "tinymce/plugins/lists";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/charmap";
import "tinymce/plugins/preview";
import "tinymce/plugins/anchor";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/code";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/media";
import "tinymce/plugins/table";
import "tinymce/plugins/help";
import "tinymce/plugins/wordcount";
import { Controller } from "react-hook-form";

export default function RTE({
  name = "content",
  control,
  label,
  defaultValue = "",
}) {
  return (
    <>
      <div className="w-full">
        {label && <label className="inline-block mb-1 pl-1">{label}</label>}
        {/* //controller can tka e the name rule control and render as a paramenter */}
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              initialValue={defaultValue}
              apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
              // apiKey="tinymiceAPIKey"
              init={{
                // initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
                ],

                toolbar:
                  "undo redo | blocks | image | bold italic forecolor |  alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </>
  );
}
