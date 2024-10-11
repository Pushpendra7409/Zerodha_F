import React from 'react'

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p className='mt-3'>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          <ul class="social d-flex list-unstyled gap-3 fs-5">
					<li>
						<a target="_blank" href="">
            <i class="fa-brands fa-youtube text-dark"></i>
						</a>
					</li>
					<li>
						<a target="_blank" href="">
            <i class="fa-brands fa-linkedin text-dark"></i>
            </a>
					</li>
					<li>
						<a target="_blank" href="">
            <i class="fa-brands fa-instagram text-dark"></i>
            </a>
					</li>
					<li>
						<a target="_blank" href="">
						<i class="fa-brands fa-facebook text-dark"></i>
						</a>
					</li>
				</ul>
        <hr/>
        <ul class="social d-flex list-unstyled gap-3 fs-5">
					<li>
						<a target="_blank" href="">
            <i class="fa-brands fa-whatsapp text-dark"></i>
						</a>
					</li>
          <li>
						<a target="_blank" href="">
            <i class="fa-brands fa-x-twitter text-dark"></i>
						</a>
					</li>
          <li>
						<a target="_blank" href="">
            <i class="fa-brands fa-telegram text-dark"></i>
						</a>
					</li>
          </ul>
          </div>
          <div className="col">
            <p className='fs-5'>Company</p>
            <a href="" className='text-decoration-none text-dark'>About</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>Products</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>Pricing</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>Referral programme</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>Careers</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>Zerodha.tech</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>Press & media</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>Zerodha cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p className='fs-5'>Support</p>
            <a href="" className='text-decoration-none text-dark'>Contact</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>Support portal</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>Z-Connect blog</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>List of charges</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p className='fs-5'>Account</p>
            <a href="" className='text-decoration-none text-dark'>Open an account</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>Fund transfer</a>
            <br />
            <a href="" className='text-decoration-none text-dark'>60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>

    <div className="container footer-graveyard-links">
			<ul className='list-unstyled d-flex flex-wrap gap-5 fs-6'>
				<li>
					<a href="https://nseindia.com" className='text-decoration-none text-dark'>NSE</a>
				</li>
				<li>
					<a href="https://www.bseindia.com/" className='text-decoration-none text-dark'>BSE</a>
				</li>
				<li>
					<a href="https://www.mcxindia.com/" className='text-decoration-none text-dark'>MCX</a>
				</li>
				<li>
					<a href="https://zerodha.com/terms-and-conditions/" className='text-decoration-none text-dark'>Terms &amp; conditions</a>
				</li>
				<li>
					<a href="https://zerodha.com/policies-and-procedures/" className='text-decoration-none text-dark'>Policies &amp; procedures</a>
				</li>
				<li>
					<a href="https://zerodha.com/privacy-policy/" className='text-decoration-none text-dark'>Privacy policy</a>
				</li>
				<li>
					<a href="https://zerodha.com/disclosure/" className='text-decoration-none text-dark'>Disclosure</a>
				</li>
				<li>
					<a href="https://zerodha.com/investor-attention/" className='text-decoration-none text-dark'>For investor's attention</a>
				</li>
				<li>
					<a href="https://zerodha.com/tos/investor-charter/" className='text-decoration-none text-dark'>Investor charter</a>
				</li>
			</ul>
		</div>
    </footer>
  )
}

export default Footer