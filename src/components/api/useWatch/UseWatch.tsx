import * as React from "react"

import CodeArea from "../../CodeArea"
import useWatch from "./codeExamples/useWatch"
import useWatchTypes from "./codeExamples/useWatchTypes"
import useWatchTs from "./codeExamples/useWatchTs"
import generic from "../../../data/generic"
import translation from "./useWatch.translations"
import { chooseTranslation } from "../../utils/languages"

import typographyStyles from "../../../styles/typography.module.css"
import tableStyles from "../../../styles/table.module.css"

const useWatchApiDescription = ({
  currentLanguage,
}: {
  currentLanguage: string
}) => (
  <>
    <code className={typographyStyles.codeHeading}>
      <h2>
        useWatch:{" "}
        <span
          className={typographyStyles.typeText}
        >{`({ control?: any, name?: string, defaultValue?: any }) => object`}</span>
      </h2>
    </code>

    {chooseTranslation(translation, currentLanguage, "description")}

    <div className={tableStyles.tableWrapper}>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th>{generic.name[currentLanguage]}</th>
            <th>{generic.type[currentLanguage]}</th>
            <th width="90px">{generic.required[currentLanguage]}</th>
            <th>{generic.description[currentLanguage]}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>name</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>string</code>
            </td>
            <td></td>
            <td>
              {chooseTranslation(translation, currentLanguage, "table.name")}
            </td>
          </tr>
          <tr>
            <td>
              <code>control</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>Object</code>
            </td>
            <td></td>
            <td>{generic.control[currentLanguage]}</td>
          </tr>
          <tr>
            <td>
              <code>defaultValue</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>any</code>
            </td>
            <td></td>
            <td>
              {chooseTranslation(
                translation,
                currentLanguage,
                "table.defaultValue"
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <CodeArea
      rawData={useWatch}
      url="https://codesandbox.io/s/react-hook-form-v6-usewatch-09qvt"
      tsRawData={useWatchTs}
      tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-usewatch-4jln6"
      rawTypes={useWatchTypes}
    />
  </>
)

export default useWatchApiDescription
