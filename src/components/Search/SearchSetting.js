import { useEffect, useState } from "react"
import PropTypes from 'prop-types'

function SearchSetting(props) {
  const [isShowSetting, setIsShowSetting] = useState(false)
  const {
    data,
    setting,
    characters,
    settingFlag,
  } = props

  const handleOpenSetting = () => {
    setIsShowSetting(true)
    let tag = document.createElement("div")
    tag.id = 'backdrop'
    let body = document.getElementsByTagName("BODY")[0]
    body.appendChild(tag)
  }

  const handleCloseSetting = () => {
    setIsShowSetting(false)
    let body = document.getElementsByTagName("BODY")[0]
    let backdrop = document.getElementById("backdrop")
    body.removeChild(backdrop)
  }

  const onBlurSuggestion = (e) => {
    const settings = document.getElementById('setting')
    const settingContent = document.getElementById('setting-content')
    if (settings && !settings.contains(e.target) &&
        settingContent && !settingContent.contains(e.target)) {
          setIsShowSetting(false)
          let body = document.getElementsByTagName("BODY")[0]
        let backdrop = document.getElementById("backdrop")
        body.removeChild(backdrop)
    }
  }

  useEffect(() => {
    window.addEventListener('click', onBlurSuggestion)

    return (() => {
      window.removeEventListener('click', onBlurSuggestion)
    })
  }, [])

  return (
    <>
      {settingFlag &&
        <div className="setting">
          <button id="setting" type="button" onClick={handleOpenSetting}> Setting </button>
        </div>
      }
      {isShowSetting && 
        <div id="setting-content">
          <div className="choose-form">
            <div>1. Show Suggestion for</div>
            {Object.keys(data).map((item, index) => 
              <div className="option" key={index}>
                <input
                  type='checkbox'
                  checked={setting.settingSuggestion[item]}
                  onChange={() => {
                    setting.setSettingSuggestion({
                      ...setting.settingSuggestion,
                      [item]: !setting.settingSuggestion[item]
                    })
                  }}
                />
                <span>{item === 'suggestion_term' ? 'Suggestion' : item}</span>
              </div>
            )}
          </div>
          <div className="flexbox">
            <div>2. How many characters do you want to show suggestion when you are typing?</div>
            <input type='number' value={characters.characterNumber} onChange={(e) => {characters.setCharacterNumber(e.target.value)}} />
          </div>
          <button className="close" type="button" onClick={handleCloseSetting}>OK</button>
        </div>
      }
    </>
  )
}

SearchSetting.defaultProps = {
  data: null,
  settingFlag: false,
  setting: {},
  characters: {},
}

SearchSetting.propTypes = {
  data: PropTypes.object,
  settingFlag: PropTypes.bool,
  settings: PropTypes.object,
  characters: PropTypes.object,
}

export default SearchSetting
