using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StoreApp.Models;
using StoreApp.Data;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace StoreApp.API
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private ApplicationDbContext _db;

        public ProductsController(ApplicationDbContext db)
        {
            this._db = db;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return from p in this._db.Products select p;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            if (product == null)
            {
                ModelState.AddModelError("", "Missing product!");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }
            this._db.Products.Add(product);
            this._db.SaveChanges();
            return Ok(product);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
