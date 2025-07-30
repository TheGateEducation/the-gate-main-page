import { exepcionesMayuscula } from "./constantes"
import React from "react";

export const formatCase = (text?: string) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .split(" ")
      .map((word, index) =>
        exepcionesMayuscula.includes(word) && index !== 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ")
      .replace(/-.*$/, "");
  };


export const renderField = (
    label: string,
    extraClasses = "",
    showEmpty: boolean,
    value?: string | number,
    ) => {
    if (!showEmpty && (value === undefined || value === null || value === "")){
        return null;
    }
    return(
        <p className={extraClasses}>
            <strong>
                {label}
            </strong>
            {value ?? ""}
        </p>
    );
};

