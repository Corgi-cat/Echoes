'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateBox = function (_React$Component) {
  _inherits(UpdateBox, _React$Component);

  function UpdateBox(props) {
    _classCallCheck(this, UpdateBox);

    var _this = _possibleConstructorReturn(this, (UpdateBox.__proto__ || Object.getPrototypeOf(UpdateBox)).call(this, props));

    _this.state = {
      modalActive: false,
      rating: '',
      impression: ''
    };
    return _this;
  }

  //show updateBox


  _createClass(UpdateBox, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({ modalActive: true });
    }

    //hide updateBox

  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ modalActive: false });
    }

    // handles all form value changes

  }, {
    key: 'handleInputChange',
    value: function handleInputChange(e) {
      var target = e.target;
      var value = target.value;
      var name = target.name;

      this.setState(_defineProperty({}, name, value));
    }

    //handles submiting form

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.updateUserEntries(this.props.impressionId, this.state.rating, this.state.impression, this.props.getUserEntries);
      this.closeModal();
    }

    // handles deleting whole entry from the database

  }, {
    key: 'handleDelete',
    value: function handleDelete(e) {
      e.preventDefault();
      this.props.deleteUserEntries(this.props.impressionId, this.props.date, this.props.getUserEntries);
      this.closeModal();
    }
  }, {
    key: 'render',
    value: function render() {
      return (
        // td
        React.createElement(
          'td',
          { className: 'col-md-3' },
          !this.state.modalActive && React.createElement(
            'div',
            { className: 'btn-group', role: 'group' },
            React.createElement(
              'a',
              { onClick: this.openModal.bind(this) },
              React.createElement(
                'button',
                { className: 'update btn btn-default' },
                React.createElement('span', { className: 'glyphicon glyphicon-pencil' })
              )
            ),
            React.createElement(
              'a',
              { onClick: this.handleDelete.bind(this) },
              React.createElement(
                'button',
                { className: 'remove btn btn-default' },
                React.createElement('span', { className: 'glyphicon glyphicon-remove-circle' })
              )
            )
          ),
          this.state.modalActive && React.createElement(
            'div',
            { className: 'update' },
            React.createElement('span', { className: 'close glyphicon glyphicon-remove', onClick: this.closeModal.bind(this) }),
            React.createElement(
              'form',
              { id: 'update', onSubmit: this.handleSubmit.bind(this) },
              React.createElement('textarea', { className: 'form-control', id: 'impression', name: 'impression',
                cols: '25',
                rows: '4',
                value: this.state.impression,
                onChange: this.handleInputChange.bind(this),
                placeholder: 'Write your impression...' }),
              React.createElement('br', null),
              React.createElement(
                'div',
                { className: 'input-group' },
                React.createElement(
                  'select',
                  { className: 'form-control', name: 'rating', id: 'rating', value: this.state.rating, onChange: this.handleInputChange.bind(this) },
                  React.createElement(
                    'option',
                    { value: null },
                    'Rating'
                  ),
                  React.createElement(
                    'option',
                    { value: 1 },
                    '1'
                  ),
                  React.createElement(
                    'option',
                    { value: 2 },
                    '2'
                  ),
                  React.createElement(
                    'option',
                    { value: 3 },
                    '3'
                  ),
                  React.createElement(
                    'option',
                    { value: 4 },
                    '4'
                  ),
                  React.createElement(
                    'option',
                    { value: 5 },
                    '5'
                  ),
                  React.createElement(
                    'option',
                    { value: 6 },
                    '6'
                  ),
                  React.createElement(
                    'option',
                    { value: 7 },
                    '7'
                  ),
                  React.createElement(
                    'option',
                    { value: 8 },
                    '8'
                  ),
                  React.createElement(
                    'option',
                    { value: 9 },
                    '9'
                  ),
                  React.createElement(
                    'option',
                    { value: 10 },
                    '10'
                  )
                ),
                React.createElement(
                  'span',
                  { className: 'input-group-btn' },
                  React.createElement('input', { className: 'btn btn-default', type: 'submit', id: 'submit', name: 'button', value: 'Save' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return UpdateBox;
}(React.Component);

window.UpdateBox = UpdateBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1VwZGF0ZUJveC5qc3giXSwibmFtZXMiOlsiVXBkYXRlQm94IiwicHJvcHMiLCJzdGF0ZSIsIm1vZGFsQWN0aXZlIiwicmF0aW5nIiwiaW1wcmVzc2lvbiIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlVXNlckVudHJpZXMiLCJpbXByZXNzaW9uSWQiLCJnZXRVc2VyRW50cmllcyIsImNsb3NlTW9kYWwiLCJkZWxldGVVc2VyRW50cmllcyIsImRhdGUiLCJvcGVuTW9kYWwiLCJiaW5kIiwiaGFuZGxlRGVsZXRlIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsc0hBQ1pBLEtBRFk7O0FBRWxCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBWSxLQUREO0FBRVhDLGNBQVEsRUFGRztBQUdYQyxrQkFBWTtBQUhELEtBQWI7QUFGa0I7QUFPbkI7O0FBRUQ7Ozs7O2dDQUNhO0FBQ1gsV0FBS0MsUUFBTCxDQUFjLEVBQUVILGFBQVksSUFBZCxFQUFkO0FBQ0Q7O0FBRUQ7Ozs7aUNBQ2M7QUFDWixXQUFLRyxRQUFMLENBQWMsRUFBQ0gsYUFBWSxLQUFiLEVBQWQ7QUFDRDs7QUFFRDs7OztzQ0FDa0JJLEMsRUFBRztBQUNuQixVQUFNQyxTQUFTRCxFQUFFQyxNQUFqQjtBQUNBLFVBQU1DLFFBQVFELE9BQU9DLEtBQXJCO0FBQ0EsVUFBTUMsT0FBT0YsT0FBT0UsSUFBcEI7O0FBRUEsV0FBS0osUUFBTCxxQkFDR0ksSUFESCxFQUNVRCxLQURWO0FBR0Q7O0FBRUQ7Ozs7aUNBQ2NGLEMsRUFBRztBQUNmQSxRQUFFSSxjQUFGO0FBQ0EsV0FBS1YsS0FBTCxDQUFX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QVEsT0FBTyxDQUFmO0FBQUE7QUFBQSxtQkFWRjtBQVdFO0FBQUE7QUFBQSxzQkFBUSxPQUFPLEVBQWY7QUFBQTtBQUFBO0FBWEYsaUJBREY7QUFjRTtBQUFBO0FBQUEsb0JBQU0sV0FBVSxpQkFBaEI7QUFDRSxpREFBTyxXQUFVLGlCQUFqQixFQUFtQyxNQUFLLFFBQXhDLEVBQWlELElBQUcsUUFBcEQsRUFBNkQsTUFBSyxRQUFsRSxFQUEyRSxPQUFNLE1BQWpGO0FBREY7QUFkRjtBQVJGO0FBRkY7QUFyQko7QUFGRjtBQXdERDs7OztFQXZHbUJJLE1BQU1DLFM7O0FBMEc5QkMsT0FBT3pCLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6IlVwZGF0ZUJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFVwZGF0ZUJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW9kYWxBY3RpdmU6ZmFsc2UsXG4gICAgICByYXRpbmc6ICcnLFxuICAgICAgaW1wcmVzc2lvbjogJydcbiAgICB9O1xuICB9XG5cbiAgLy9zaG93IHVwZGF0ZUJveFxuICBvcGVuTW9kYWwgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RhbEFjdGl2ZTp0cnVlfSlcbiAgfVxuXG4gIC8vaGlkZSB1cGRhdGVCb3hcbiAgY2xvc2VNb2RhbCAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW9kYWxBY3RpdmU6ZmFsc2V9KVxuICB9XG5cbiAgLy8gaGFuZGxlcyBhbGwgZm9ybSB2YWx1ZSBjaGFuZ2VzXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIC8vaGFuZGxlcyBzdWJtaXRpbmcgZm9ybVxuICBoYW5kbGVTdWJtaXQgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVVc2VyRW50cmllcyh0aGlzLnByb3BzLmltcHJlc3Npb25JZCwgdGhpcy5zdGF0ZS5yYXRpbmcsIHRoaXMuc3RhdGUuaW1wcmVzc2lvbiwgdGhpcy5wcm9wcy5nZXRVc2VyRW50cmllcyk7XG4gICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gIH1cblxuICAvLyBoYW5kbGVzIGRlbGV0aW5nIHdob2xlIGVudHJ5IGZyb20gdGhlIGRhdGFiYXNlXG4gIGhhbmRsZURlbGV0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuZGVsZXRlVXNlckVudHJpZXModGhpcy5wcm9wcy5pbXByZXNzaW9uSWQsIHRoaXMucHJvcHMuZGF0ZSwgdGhpcy5wcm9wcy5nZXRVc2VyRW50cmllcyk7XG4gICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAvLyB0ZFxuICAgICAgICA8dGQgY2xhc3NOYW1lPSdjb2wtbWQtMyc+XG4gICAgICAgICAgeyF0aGlzLnN0YXRlLm1vZGFsQWN0aXZlICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4tZ3JvdXAnIHJvbGU9XCJncm91cFwiPlxuICAgICAgICAgICAgICB7LyogdXBkYXRlIGJ1dHRvbiAtLSBkbyBub3QgcmVtb3ZlIGEgdGFncy5cbiAgICAgICAgICAgICAgICBUaGV5IGFyZSBuZWNlc3NhcnkgdG8gbWFpbnRhaW4gd29ya2luZyBidXR0b25zIHdoaWxlIGtlZXBpbmcgYm9vdHN0cmFwIHN0eWxpbmcgKi99XG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd1cGRhdGUgYnRuIGJ0bi1kZWZhdWx0Jz5cbiAgICAgICAgICAgICAgICAgIHsvKiBwZW5jaWwgaWNvbiAqL31cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1wZW5jaWwnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB7LyogIGRlbGV0ZSBidXR0b24gKi99XG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVsZXRlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdyZW1vdmUgYnRuIGJ0bi1kZWZhdWx0Jz5cbiAgICAgICAgICAgICAgICAgIHsvKiByZW1vdmUgaWNvbiAqL31cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUtY2lyY2xlJz48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RoaXMuc3RhdGUubW9kYWxBY3RpdmUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VwZGF0ZSc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2xvc2UgZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUnIG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpfT48L3NwYW4+XG4gICAgICAgICAgICAgIDxmb3JtIGlkPSd1cGRhdGUnIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIGlkPSdpbXByZXNzaW9uJyBuYW1lPSdpbXByZXNzaW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz0nMjUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPSc0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaW1wcmVzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nV3JpdGUgeW91ciBpbXByZXNzaW9uLi4uJz48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cCc+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBuYW1lPSdyYXRpbmcnIGlkPSdyYXRpbmcnIHZhbHVlPXt0aGlzLnN0YXRlLnJhdGluZ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e251bGx9PlJhdGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxfT4xPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezJ9PjI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17M30+Mzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXs0fT40PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezV9PjU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Nn0+Njwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXs3fT43PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezh9Pjg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17OX0+OTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxMH0+MTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1idG4nPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQnIHR5cGU9J3N1Ym1pdCcgaWQ9XCJzdWJtaXRcIiBuYW1lPSdidXR0b24nIHZhbHVlPSdTYXZlJz48L2lucHV0PlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgPC90ZD5cbiAgICAgIClcbiAgICB9XG59XG5cbndpbmRvdy5VcGRhdGVCb3ggPSBVcGRhdGVCb3g7XG4iXX0=