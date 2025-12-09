using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.CountryBorders
{
    /// <summary>
    /// Query options for the Country Borders API
    /// </summary>
    public class CountryBordersQueryOptions
    {
        /// <summary>
        /// The Country 2 Letter ISO code (e.g., CA)
        /// Example: CA
        /// </summary>
        [JsonProperty("country")]
        public string Country { get; set; }
    }
}
