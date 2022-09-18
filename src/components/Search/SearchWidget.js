import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types'
import SearchSetting from "./SearchSetting";
import SuggestionSearch from "./SuggestionSearch";

function SearchWidget(props) {
  const {
    id,
    width,
    height,
    placeholder,
    disabled,
    data,
    settingFlag,
    settings
  } = props

  const _search = useRef()

  const [search, setSearch] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [settingSuggestion, setSettingSuggestion] = useState({
    suggestion_term: settings && settings.includes('term'),
    collection: settings && settings.includes('collection'),
    product: settings && settings.includes('product'),
  })
  const [characterNumber, setCharacterNumber] = useState(0)
  const [result, setResult] = useState(null)


  const handleSearchChange = (e) => {
    const { value } = e.target
    setSearch(value)

    let searchRes = {}
    if (data && value.length >= characterNumber && value.length > 0) {
      searchRes = getSearchObjectResult(value) 
      setIsVisible(true)
      setResult(searchRes)
    } else {
      setIsVisible(false)
      setResult(null)
    }
  }

  const getSearchObjectResult = (val) => {
    const res = {}
    Object.keys(data).forEach((ob) => 
      res[ob] =
        data[ob].filter((item) =>
          ob === 'suggestion_term' ? item.term.includes(val) : item.title.includes(val)
        )
    )
    return res
  }

  useEffect(() => {
    if(_search) {
      _search.current.style.width = width + 'px'
      _search.current.style.height = height + 'px'
    }
  }, [width, height])

  return (
    <div className="searchBar">
      <input
        ref={_search}
        className='search-input'
        id={id}
        type='text'
        value={search}
        placeholder={placeholder}
        onFocus={(e) => {
          if(e.target.value.length >= characterNumber && e.target.value.length > 0)
            setIsVisible(true)
        }}
        onChange={handleSearchChange}
        disabled={disabled}
      />
      <SuggestionSearch id={id} visible={{isVisible, setIsVisible}} result={result} settingSuggestion={settingSuggestion} />
      
      {(settings && settings.length > 0) &&
        <SearchSetting 
          data={data}
          setting={{settingSuggestion, setSettingSuggestion}}
          characters={{characterNumber, setCharacterNumber}}
          settingFlag={settingFlag}
        />
      }
    </div>
  )
}

SearchWidget.defaultProps = {
  id: 'search',
  placeholder: '',
  disabled: false,
  width: 250,
  height: 35,
  data: null,
  settingFlag: false,
  settings: ['term', 'collection', 'product'],
}

SearchWidget.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  disabled: PropTypes.bool,
  settingFlag: PropTypes.bool,
  settings: PropTypes.arrayOf(PropTypes.string),
}

export default SearchWidget
