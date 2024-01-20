function SubscribeForm(){
    return(
        <div>
            <form className=" p-5" onSubmit={handleSubmit}>
            <ErrorAlert error={error} className="alert alert-danger"/>

            <label for="name" class="form-label">
              Name:
            </label>
            <input
              className="form-control "
              type="text"
              onChange={handleChange}
              id="name"
              value={formData.name}
              name="name"
            />

            <label for="emailAddress" class="form-label mt-3">
              Email Address
            </label>
            <input
              className="form-control "
              type="text"
              onChange={handleChange}
              id="emailAddress"
              value={formData.email_address}
              name="email_address"
            />

            <div className="form-group">
              <label for="serviceType" className="form-label mt-3 w-100">
                How did you hear about us?
              </label>
              <select
                className="form-select  "
                id="serviceType"
                name="service_type"
                value={formData.service_type}
                onChange={handleChange}
              >
                <option value="default">select an option</option>
                <option value="google">Google</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="friend">Friend</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button type="submit" className="btn btn-outline-primary mt-4">
              Submit
            </button>
            <button
              className="btn btn-outline-secondary mt-4"
              onClick={cancelAndReturn}
            >
              Cancel
            </button>
          </form>
        </div>
    )
}