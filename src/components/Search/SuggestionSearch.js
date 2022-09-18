import { useCallback, useEffect } from "react"
import PropTypes from 'prop-types'

function SuggestionSearch(props) {
  const {
    id,
    result,
    settingSuggestion,
    visible,
  } = props

  const onBlurSuggestion = useCallback((e) => {
    const resBlock = document.getElementById('result')
    const searchBlock = document.getElementById(id)
    if (resBlock && !resBlock.contains(e.target) &&
        searchBlock && !searchBlock.contains(e.target)){
          visible.setIsVisible(false)
    }
  }, [id, visible])

  useEffect(() => {
    window.addEventListener('click', onBlurSuggestion)

    return (() => {
      window.removeEventListener('click', onBlurSuggestion)
    })
  }, [onBlurSuggestion])

  if (!visible.isVisible ||
    (!result || (result && result.suggestion_term && result.collection && result.product &&
      result.suggestion_term.length === 0 &&
      result.collection.length === 0 &&
      result.product.length === 0))) {
    return
  }

  return (
      <div id='result' className="suggestion-result">
        {settingSuggestion.suggestion_term &&
            result && result.suggestion_term && result.suggestion_term.length > 0 &&
          <div className="term-block">
            <div className="block-title">
              Suggestions
            </div>
            <div className="result">
              {result.suggestion_term.slice(0,3).map((item,index) => 
                <div className="item" key={index} onClick={() => window.open(item.url)}>{item.term}</div>
              )}
            </div>
          </div>
        }
        {settingSuggestion.collection &&
            result && result.collection && result.collection.length > 0 &&
          <div className="collection-block">
            <div className="block-title">
              Collections
            </div>
            <div className="result">
              {result.collection.slice(0,3).map((item, index) => 
                <div className="item" key={index} onClick={() => window.open(item.url)}>{item.title}</div>
              )}
            </div>
          </div>
        }
        {settingSuggestion.product &&
          result && result.product && result.product.length > 0 &&
          <div className="product-block">
            <div className="block-title">
              Products
            </div>
            <div className="result">
                {result.product.slice(0,3).map((item, index) => 
                  <div className="item product" key={index} onClick={() => window.open(item.url)}>
                    <div className="product-image">
                      <img src={item.image} width='80' height='100' alt='cloth' />
                    </div>
                    <div className="product-detail">
                      <h4>{item.title}</h4>
                      <span>{item.brand}</span>
                      <strong>${item.price.toFixed(2)}</strong>
                    </div>
                  </div>
                )}
            </div>
            {result.product && result.product.length > 3 &&
              <div className="view-all">
                View all {result.product.length} products
              </div>
            }
          </div>
        }
      </div>
  )
}

SuggestionSearch.defaultProps = {
  id: 'search',
  result: null,
  settingSuggestion: null,
  visible: false,
}

SuggestionSearch.propTypes = {
  id: PropTypes.string,
  result: PropTypes.object,
  settingSuggestion: PropTypes.object,
  visible: PropTypes.object,
}

export default SuggestionSearch
