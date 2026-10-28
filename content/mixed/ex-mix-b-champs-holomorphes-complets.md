---
id: ex-mix-b-champs-holomorphes-complets
type: exercise
chapters: [7, 1, 2, 5]
title: "Flot d'un champ holomorphe z' = f(z) : seuls les champs affines sont complets"
source: "Classique (résultat « folklore » sur les champs de vecteurs holomorphes complets de C, cf. Ilyashenko–Yakovenko, *Lectures on Analytic Differential Equations*, ch. 1) — progression et exemples inventés"
difficulty: 4
time: 75
tools: [ch07-flot-global-ouvert-regulier, ch07-translation-temps-autonome, ch07-proprietes-flot-formules, ch05-lemme-schwarz, ch01-c-derivable-ssi-df-c-lineaire, ch07-unicite-globale, ch02-automorphismes-de-c, ch07-courbe-integrale-maximale-def, ch02-logarithme-existence]
---
## Énoncé

Soit $f\in\Hol(\C)$. On identifie $\C$ à $\R^2$ et l'on considère l'équation différentielle autonome (le temps $t$ est **réel**)
$$
(E)\qquad z'(t)=f\big(z(t)\big).
$$
Pour $z\in\C$, on note $J(z)$ l'intervalle de définition de la solution maximale de $(E)$ valant $z$ en $t=0$, $D=\{(t,z)\in\R\times\C : t\in J(z)\}$, $F:D\to\C$ le flot, $F_t(z)=F(t,z)$ et $U_t=\{z\in\C:(t,z)\in D\}$. On dit que $f$ est **complet** si $J(z)=\R$ pour tout $z\in\C$. Pour $c\in\C$, on note $m_c:\C\to\C$, $h\mapsto ch$ (application $\R$-linéaire).

1. a) Montrer que $(E)$ admet, pour toute condition initiale, une unique solution maximale, que $D$ est ouvert et que $F$ est de classe $C^2$ sur $D$.
   b) Montrer que $U_t$ est ouvert et que $F_t$ est une bijection de $U_t$ sur $U_{-t}$, de réciproque $F_{-t}$.
2. On fixe $z\in\C$ et l'on pose, pour $s\in J(z)$, $M(s)=d(F_s)_z\in\mathcal L_\R(\C)$, différentielle (réelle) en $z$ de $w\mapsto F(s,w)$.
   a) Montrer que $M$ est de classe $C^1$ sur $J(z)$, que $M(0)=\id$ et que $M'(s)=m_{f'(F_s(z))}\circ M(s)$.
   b) En déduire que, pour tout $t\in\R$, $F_t$ est holomorphe sur $U_t$ et
$$
(F_t)'(z)=\exp\Big(\int_0^tf'\big(F_s(z)\big)\,ds\Big)\qquad(z\in U_t).
$$
3. On suppose $f$ complet. Montrer que, pour tout $t\in\R$, $F_t$ est un automorphisme holomorphe de $\C$, puis qu'il existe $a,b:\R\to\C$ de classe $C^1$, avec $a(t)\neq0$, telles que $F_t(z)=a(t)z+b(t)$ pour tous $t,z$.
4. En déduire que $f$ est complet si et seulement s'il existe $\alpha,\beta\in\C$ tels que $f(z)=\alpha z+\beta$ pour tout $z$. Vérifier la formule de 2 b) dans ce cas.
5. Soit $P\in\C[X]$ de degré $\ge2$. Montrer que $z'=P(z)$ possède une solution maximale qui n'est pas définie sur $\R$ tout entier. Pour $P(z)=z^2$, déterminer toutes les solutions maximales et l'ensemble des $z_0$ tels que $J(z_0)\neq\R$.
6. On considère $z'=e^{-z}$.
   a) Montrer que si $z$ est une solution sur un intervalle $J\ni0$ avec $z(0)=z_0$, alors $e^{z(t)}=e^{z_0}+t$ pour tout $t\in J$.
   b) Déterminer $J(z_0)$ pour tout $z_0\in\C$ (on distinguera $e^{z_0}\notin\R$, $e^{z_0}>0$ et $e^{z_0}<0$).
   c) Pour $t>0$, déterminer $U_t$. Le résultat est-il cohérent avec la question 4 ?

## Indices

### Indice 1
Deux idées. (i) La différentielle du flot par rapport à la condition initiale est solution d'une équation **linéaire** dont le coefficient $df=m_{f'}$ est $\C$-linéaire : elle reste $\C$-linéaire, donc le flot est holomorphe en $z$. (ii) Un flot complet fournit des automorphismes de $\C$, et l'on connaît tous les automorphismes de $\C$.

### Indice 2
2 a) : dériver $\partial_sF(s,w)=f(F(s,w))$ par rapport à $w$ et échanger les dérivations (lemme de Schwarz, $F$ étant $C^2$). 2 b) : deviner une solution de la forme $s\mapsto m_{\mu(s)}$ avec $\mu$ à valeurs complexes, et conclure par l'unicité pour une équation linéaire dans l'espace de Banach $\mathcal L_\R(\C)$ (de dimension $4$).

### Indice 3
3 : $F_t$ est holomorphe, bijective, de réciproque $F_{-t}$ holomorphe ; puis $a(t)=F_t(1)-F_t(0)$, $b(t)=F_t(0)$. 4 : dériver $F_t(z)=a(t)z+b(t)$ en $t=0$. 5 : contraposée de 4 ; pour $z^2$, essayer $z_0/(1-tz_0)$.

### Indice 4
6 : dériver $t\mapsto e^{z(t)}$. Pour construire les solutions quand $e^{z_0}\notin\R$, il faut un logarithme holomorphe de $w\mapsto w$ sur un demi-plan contenant la droite $\{e^{z_0}+t:t\in\R\}$.

## Corrigé

**1. a)** $f$ est holomorphe, donc $C^\infty$ comme application de $\R^2$ dans $\R^2$ ([[ch01-holomorphe-analytique]]) ; en particulier $f$ est $C^1$, donc localement lipschitzienne ([[ch07-restriction-domaine-c1-lipschitz]]). Le champ est autonome ($I=\R$) : les solutions maximales existent et sont uniques ([[ch07-courbe-integrale-maximale-def]]), et le théorème [[ch07-flot-global-ouvert-regulier]] (avec $p=2$, et la convention $\tau_0=0$ du cas autonome, [[ch07-flot-global-def]]) dit que $D$ est ouvert dans $\R\times\C$ et que $F$ est $C^2$ sur $D$ (et même $C^p$ pour tout $p$).

**b)** $U_t$ est l'image réciproque de l'ouvert $D$ par l'application continue $z\mapsto(t,z)$ : il est ouvert. Soit $z\in U_t$, c'est-à-dire $t\in J(z)$. Par l'invariance par translation du temps ([[ch07-translation-temps-autonome]]) avec $t_1=t$ : $J(F_t(z))=J(z)-t$, qui contient $-t$ puisque $0\in J(z)$, donc $F_t(z)\in U_{-t}$, et
$$
F_{-t}\big(F_t(z)\big)=\alpha_{F_t(z)}(-t)=\alpha_z(-t+t)=z .
$$
En échangeant les rôles de $t$ et $-t$, $F_t(F_{-t}(w))=w$ pour $w\in U_{-t}$. Donc $F_t:U_t\to U_{-t}$ est bijective, de réciproque $F_{-t}$.

**2. a)** $(s,z)\in D$ ouvert, donc $w\mapsto F(s,w)$ est définie et $C^2$ au voisinage de $z$, et $M(s)=\partial_wF(s,z)$ a un sens. Comme $F$ est $C^2$, $\partial_wF$ est $C^1$ sur $D$, donc $M$ est $C^1$. On a $\partial_sF(s,w)=f(F(s,w))$ sur $D$ et $F(0,w)=w$ ([[ch07-proprietes-flot-formules]]) ; donc $M(0)=\id$. Le membre de droite $f\circ F$ est $C^1$ et, par la règle de la chaîne ([[ch05-composition-differentielles]]),
$$
\partial_w\big(\partial_sF\big)(s,w)=df_{F(s,w)}\circ\partial_wF(s,w)=m_{f'(F(s,w))}\circ\partial_wF(s,w),
$$
car la différentielle réelle d'une fonction holomorphe en $\zeta$ est la multiplication par $f'(\zeta)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]). $F$ étant $C^2$ sur l'ouvert $D$, le lemme de Schwarz ([[ch05-lemme-schwarz]]) permet d'échanger $\partial_s$ et $\partial_w$ : $\partial_s\partial_wF=\partial_w\partial_sF$. En $w=z$, cela donne $M'(s)=m_{f'(F_s(z))}\circ M(s)$.

**b)** La fonction $\sigma\mapsto f'(F_\sigma(z))$ est continue sur $J(z)$. Posons $\mu(s)=\exp\big(\int_0^sf'(F_\sigma(z))\,d\sigma\big)$ : $\mu$ est $C^1$, $\mu'(s)=f'(F_s(z))\mu(s)$, $\mu(0)=1$, et $\mu(s)\neq0$. Alors $N(s)=m_{\mu(s)}$ vérifie, puisque $m_c\circ m_d=m_{cd}$,
$$
N'(s)=m_{\mu'(s)}=m_{f'(F_s(z))}\circ N(s),\qquad N(0)=\id .
$$
Le champ $G(s,L)=m_{f'(F_s(z))}\circ L$ sur $J(z)\times\mathcal L_\R(\C)$ est continu, et sur $[s_1-\eta,s_1+\eta]\subset J(z)$ il est lipschitzien en $L$ de constante $\max|f'(F_\sigma(z))|$ (car $\norm{m_c}=|c|$). Par l'unicité globale ([[ch07-unicite-globale]]), $M=N$ sur $J(z)$.

Soit $t\in\R$ et $z\in U_t$, i.e. $t\in J(z)$ : $d(F_t)_z=m_{\mu(t)}$ est $\C$-linéaire. Comme $F_t$ est différentiable en $z$, elle y est $\C$-dérivable, de dérivée $\mu(t)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]). Ceci vaut en tout point de l'ouvert $U_t$, où $F_t$ est $C^1$ : $F_t\in\Hol(U_t)$ ([[ch01-def-holomorphe]]) et $(F_t)'(z)=\exp\big(\int_0^tf'(F_s(z))ds\big)$. En particulier $(F_t)'$ ne s'annule jamais.

**3.** Si $f$ est complet, $D=\R\times\C$ et $U_t=\C$ pour tout $t$. Par 1 b) et 2 b), $F_t:\C\to\C$ est holomorphe et bijective, de réciproque $F_{-t}$ holomorphe : c'est un automorphisme de $\C$ ([[ch01-def-biholomorphisme]]). Les automorphismes de $\C$ sont les $z\mapsto az+b$ avec $a\in\C^\times$, $b\in\C$ ([[ch02-automorphismes-de-c]]) : $F_t(z)=a(t)z+b(t)$ avec $a(t)\neq0$. En évaluant en $z=0$ et $z=1$ : $b(t)=F(t,0)$ et $a(t)=F(t,1)-F(t,0)$, fonctions $C^1$ de $t$ puisque $F$ est $C^2$ ; de plus $a(0)=1$, $b(0)=0$ car $F_0=\id$.

**4.** *Condition nécessaire.* Si $f$ est complet, pour tout $z$, $\partial_tF(t,z)=f(F(t,z))$ ; en $t=0$ ($F_0(z)=z$) et avec 3,
$$
f(z)=\partial_tF(0,z)=a'(0)\,z+b'(0) .
$$
Donc $f(z)=\alpha z+\beta$ avec $\alpha=a'(0)$, $\beta=b'(0)$.

*Condition suffisante.* Si $f(z)=\alpha z+\beta$ avec $\alpha\neq0$, la fonction $\zeta(t)=\big(z_0+\tfrac\beta\alpha\big)e^{\alpha t}-\tfrac\beta\alpha$ vérifie $\zeta(0)=z_0$ et $\zeta'=\alpha\big(z_0+\tfrac\beta\alpha\big)e^{\alpha t}=\alpha\zeta+\beta$ ; si $\alpha=0$, $\zeta(t)=z_0+\beta t$ convient. Ces solutions sont définies sur $\R$, donc $J(z_0)=\R$ : $f$ est complet. Dans les deux cas $F_t(z)=e^{\alpha t}z+b(t)$, donc $(F_t)'(z)=e^{\alpha t}=\exp\big(\int_0^t\alpha\,ds\big)$, conformément à 2 b) puisque $f'=\alpha$.

**5.** Un polynôme de degré $\ge2$ n'est pas affine ; par 4, $P$ n'est pas complet : il existe $z_0$ avec $J(z_0)\neq\R$.

Pour $P(z)=z^2$. Si $z_0=0$ : la solution est constante nulle, $J(0)=\R$. Si $z_0\neq0$ : $\zeta(t)=\dfrac{z_0}{1-tz_0}$ est définie là où $1-tz_0\neq0$, avec $\zeta(0)=z_0$ et $\zeta'(t)=\dfrac{z_0^2}{(1-tz_0)^2}=\zeta(t)^2$.
* Si $z_0\notin\R$ : pour $t\in\R^*$, $\Im(tz_0)=t\Im z_0\neq0$, donc $1-tz_0\neq0$ pour tout $t\in\R$ : $\zeta$ est définie sur $\R$ et $J(z_0)=\R$.
* Si $z_0\in\R^*$ : $\zeta$ est définie sur l'intervalle $]-\infty,1/z_0[$ (si $z_0>0$) ou $]1/z_0,+\infty[$ (si $z_0<0$), qui contient $0$, et $|\zeta(t)|\to+\infty$ à la borne finie ; une solution prolongeant $\zeta$ au-delà serait continue, donc bornée, au voisinage de cette borne : impossible. Donc $J(z_0)=\,]-\infty,1/z_0[$ ou $]1/z_0,+\infty[$.

L'ensemble des $z_0$ tels que $J(z_0)\neq\R$ est donc $\R^*$ : seules les solutions réelles explosent. (Contrôle de 2 b) : $(F_t)'(z)=(1-tz)^{-2}$, et $\mu(t)=(1-tz)^{-2}$ vérifie bien $\mu'=\frac{2z}{1-tz}\mu=2F_t(z)\,\mu=f'(F_t(z))\mu$, $\mu(0)=1$.)

**6. a)** $h(t)=e^{z(t)}$ est $C^1$ et ([[ch01-derivee-f-rond-gamma]]) $h'(t)=e^{z(t)}z'(t)=e^{z(t)}e^{-z(t)}=1$. Sur l'intervalle $J$, $h(t)=h(0)+t=e^{z_0}+t$. En particulier $e^{z_0}+t\neq0$ pour tout $t\in J$.

**b)** Notons $w_0=e^{z_0}$ et $z_0=x_0+iy_0$.

* *Cas $w_0\notin\R$.* La droite $\{w_0+t:t\in\R\}$ est contenue dans le demi-plan ouvert $H=\{w:\Im(w)\,\Im(w_0)>0\}$, convexe donc simplement connexe ([[ch02-etoile-simplement-connexe]]), sur lequel $w\mapsto w$ ne s'annule pas. Il existe donc $\ell\in\Hol(H)$ avec $e^{\ell(w)}=w$ ([[ch02-logarithme-existence]]) ; comme $e^{\ell(w_0)}=e^{z_0}$, $\ell(w_0)-z_0\in2i\pi\Z$ et, quitte à retrancher cette constante, $\ell(w_0)=z_0$. En dérivant $e^{\ell}=w$ : $\ell'(w)=1/w$. Alors $\zeta(t)=\ell(w_0+t)$, $t\in\R$, vérifie $\zeta(0)=z_0$ et $\zeta'(t)=\dfrac1{w_0+t}=e^{-\zeta(t)}$. Donc $J(z_0)=\R$.
* *Cas $w_0>0$*, c'est-à-dire $y_0=2k\pi$, $k\in\Z$ : $\zeta(t)=\ln(e^{x_0}+t)+2ik\pi$, $t>-e^{x_0}$, vérifie $\zeta(0)=z_0$ et $\zeta'(t)=\frac1{e^{x_0}+t}=e^{-\zeta(t)}$. Par a), toute solution sur un intervalle $J\ni0$ vérifie $e^{x_0}+t\neq0$ sur $J$, donc $J\subset\,]-e^{x_0},+\infty[$. Ainsi $J(z_0)=\,]-e^{x_0},+\infty[$ (et $\Re\zeta(t)\to-\infty$ quand $t\to-e^{x_0}$).
* *Cas $w_0<0$*, c'est-à-dire $y_0=(2k+1)\pi$ : $\zeta(t)=\ln(e^{x_0}-t)+i(2k+1)\pi$, $t<e^{x_0}$, vérifie $e^{\zeta(t)}=-(e^{x_0}-t)=w_0+t$ et $\zeta'(t)=\frac{-1}{e^{x_0}-t}=\frac1{w_0+t}=e^{-\zeta(t)}$. Le même argument donne $J(z_0)=\,]-\infty,e^{x_0}[$.

En résumé, $J(z_0)=\R$ si et seulement si $\Im(z_0)\notin\pi\Z$. (Contrôle numérique : pour $z_0=0{,}5+i$ et $t=\pm50$, l'intégration de $(E)$ vérifie $e^{z(t)}=e^{z_0}+t$ à $10^{-10}$ près ; pour $z_0=1+i\pi$, $\Re z(t)\to-\infty$ quand $t\to e$.)

**c)** Pour $t>0$ : $z=x+iy\in U_t\iff t\in J(z)$. D'après b), cela n'échoue que si $y\in\pi+2\pi\Z$ et $t\ge e^{x}$, c'est-à-dire $x\le\ln t$. Donc
$$
U_t=\C\setminus\bigcup_{k\in\Z}\big\{x+i(2k+1)\pi : x\le\ln t\big\},
$$
le plan privé d'une infinité de demi-droites horizontales fermées : c'est bien un ouvert (1 b)), différent de $\C$. Sur $U_t$, $F_t$ est la fonction holomorphe caractérisée par $e^{F_t(z)}=e^z+t$ (et continue en $t$), et $(F_t)'(z)=\frac{e^z}{e^z+t}$, ce qui est la formule de 2 b) puisque $\mu(t)=\frac{e^z}{e^z+t}$ vérifie $\mu'=-\frac{\mu}{e^z+t}=-e^{-F_t(z)}\mu=f'(F_t(z))\mu$, $\mu(0)=1$. C'est cohérent avec 4 : $e^{-z}$ n'est pas affine, donc pas complet — et pourtant **presque toutes** les solutions sont globales ; l'incomplétude ne se voit que sur les droites $\Im z\in\pi\Z$.

## Pièges et variantes

* **Holomorphie en $z$, pas en $t$** : ici $t$ est réel et la question 2 porte sur $z\mapsto F_t(z)$ à $t$ fixé. L'argument « $d(F_t)_z$ est $\C$-linéaire » est le cœur du problème ; il repose sur le fait que l'équation aux variations a un coefficient $\C$-linéaire (voir aussi [[ex-ch07-equation-aux-variations]]).
* **Sans complétude**, $F_t$ n'est qu'un biholomorphisme de $U_t$ sur $U_{-t}$ (questions 1 b) et 2 b)) et le théorème sur les automorphismes de $\C$ ne s'applique pas : c'est l'hypothèse $U_t=\C$ qui est utilisée en 3.
* Ne pas confondre « le champ réel restreint à $\R$ explose » et « le champ n'est pas complet » : pour $z^2$, les solutions non réelles sont globales (ce sont des cercles passant par $0$, privés de $0$, parcourus en un temps infini).
* On n'a pas besoin du lemme des bouts : les formules explicites et l'argument « $|\zeta|\to\infty$ ou $e^{z_0}+t\to0$ interdit tout prolongement » suffisent.
* Variante : sur le disque unité $D$, les champs holomorphes complets (au sens : les solutions restent dans $D$ pour tout $t\in\R$) sont les champs $f(z)=c+i\theta z-\bar cz^2$ ($c\in\C$, $\theta\in\R$), dont les flots sont des groupes à un paramètre d'automorphismes de $D$ — une équation de Riccati dont le flot est formé d'homographies. La même méthode (flot holomorphe, puis description de $\mathrm{Aut}(D)$, [[ch01-automorphismes-disque]]) fournit la condition nécessaire.
