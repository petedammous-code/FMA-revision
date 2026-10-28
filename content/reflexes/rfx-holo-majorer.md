---
id: rfx-holo-majorer
type: reflexe
situation: Majorer le module d'une fonction holomorphe, de sa dérivée ou de ses coefficients de Taylor
chapters: [1, 3]
---
## Situation

On a $f\in\Hol(\Omega)$ avec une information sur $|f|$ quelque part : $|f|\le M$ sur un disque, sur un cercle, sur le bord d'un compact, ou $f(\Omega)\subset D$ ; parfois $f(z_0)=0$ ou $f(0)=0$. On veut une **inégalité quantitative** : « montrer que $|f'(z_0)|\le\dots$ », « prouver qu'il existe $C>0$ tel que $|f(z)|\le C\dots$ », « majorer $|a_n|$ », « montrer que $|f(z)|\le|z|$ », « comparer $\sup_{|z|=\rho}|f|$ pour différents $\rho$ ». Ces estimations sont les **lemmes intermédiaires** des exercices longs (elles servent ensuite à Liouville, Montel, à passer à la limite ou à montrer une convergence).

## Options

### [x] Estimées de Cauchy — [[ch01-estimees-cauchy]]
**Quand.** On connaît $\sup_{C(z_0,r)}|f|$ (ou $\sup_{\bar D(z_0,r)}|f|$) avec $\bar D(z_0,r)\subset\Omega$ et on veut majorer $|f^{(n)}(z_0)|$ ou les coefficients $a_n=f^{(n)}(z_0)/n!$ de la série de Taylor en $z_0$ : $|a_n|\le\sup_{C(z_0,r)}|f|/r^n$. Pour majorer $f'$ en un point $z$ quelconque d'un disque : centrer un cercle en $z$ de rayon $r<\dist(z,\partial\Omega)$.
**Justification.** Formule (I.7.1) : $a_n=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f(\omega)}{(\omega-z_0)^{n+1}}d\omega$, majorée par longueur $\times$ sup ([[ch01-longueur-majoration-integrale]]) : $\frac1{2\pi}\cdot2\pi r\cdot\frac{\sup|f|}{r^{n+1}}$.
**Pièges.** Le disque fermé doit être **dans $\Omega$** ; on a le droit de faire $r\to\dist(z_0,\partial\Omega)$ **après** avoir écrit l'inégalité à $r$ fixé. Optimiser en $r$ quand le sup dépend de $r$ (par exemple $\sup\le(1-r)^{-1}$ : prendre $r=1-\tfrac1n$ pour $a_n$). La perte de rayon est inévitable : on majore $f'$ sur $\bar D(0,r)$ par $\sup_{\bar D(0,R)}|f|/(R-r)$, pas par $\sup_{\bar D(0,r)}|f|$.

### [x] Maximum sur le bord — [[ch01-maximum-sur-le-bord]]
**Quand.** $f$ continue sur $\bar\Omega$ **compact**, holomorphe sur $\Omega$ **connexe**, et on connaît $|f|$ sur $\partial\Omega$ : alors $|f(z)|\le\sup_{\partial\Omega}|f|$ pour tout $z\in\bar\Omega$. Souvent appliqué à une fonction **auxiliaire** $g=f/h$ ou $f\cdot h$ choisie pour que $|g|$ soit facile à contrôler sur le bord ($h(z)=z^n$, $h(z)=e^{-\lambda z}$ sur une bande, $h=$ un produit de facteurs $(z-a)/(1-\bar az)$ annulant les zéros de $f$).
**Justification.** Principe du maximum [[ch01-principe-maximum]] : un max intérieur de $|g|$ force $g$ constante ; sinon le sup (atteint par compacité) est sur le bord.
**Pièges.** Écrire les trois hypothèses : continuité sur $\bar\Omega$, compacité (sinon $e^{-iz}$... sur une bande non bornée il faut un argument supplémentaire de type Phragmén–Lindelöf, hors poly), connexité. Pour un **minorant** de $|f|$ : appliquer à $1/f$ si $f$ ne s'annule pas.

### [x] Lemme de Schwarz (après normalisation) — [[ch01-lemme-schwarz]]
**Quand.** $f(D)\subset\bar D$ et $f(0)=0$ : alors $|f(z)|\le|z|$ et $|f'(0)|\le1$. Toute situation « $f:D(a,r)\to D(b,R)$ avec $f(a)=b$ » s'y ramène par $g(z)=\frac{f(a+rz)-b}{R}$ : on obtient $|f(z)-b|\le\frac Rr|z-a|$ et $|f'(a)|\le R/r$. Pour $f(0)\ne0$ : composer par l'automorphisme $\varphi_{f(0)}(w)=\frac{w-f(0)}{1-\overline{f(0)}w}$ ([[ch01-automorphismes-disque]]).
**Justification.** $f(z)/z$ est holomorphe (zéro en $0$ effacé) et le principe du maximum sur $|z|\le r<1$ donne $|f(z)/z|\le1/r\to1$.
**Pièges.** Il faut $f(0)=0$ **et** $|f|\le1$ : normaliser explicitement et dire pourquoi la fonction normalisée envoie $D$ dans $\bar D$. Le cas d'égalité ($|f(z_0)|=|z_0|$ pour un $z_0\ne0$, ou $|f'(0)|=1$) force une rotation : c'est l'outil de **rigidité** (voir [[rfx-holo-injective-ouverte]]).

### [x] Trois cercles d'Hadamard (interpolation entre deux rayons) — [[ch01-trois-cercles-hadamard]]
**Quand.** $f$ holomorphe sur un ouvert contenant la couronne $r\le|z|\le R$, on connaît $M(r)$ et $M(R)$ et on veut majorer $M(\rho)$ pour $r<\rho<R$ : $M(\rho)\le M(r)^tM(R)^{1-t}$ avec $\rho=r^tR^{1-t}$ (convexité de $\log M$ en $\log\rho$). Mot-clé : « sup sur des cercles intermédiaires », « convexe », « $\rho^\alpha M(\rho)$ ».
**Justification.** Principe du maximum appliqué à $z^pf(z)^q$ sur la couronne (connexe, compacte), puis passage de $p/q$ rationnel à $\alpha$ réel.
**Pièges.** La couronne doit être contenue dans $\Omega$ (pas de singularité entre les deux cercles). Résultat moins connu : si l'énoncé le vise, il le fait redémontrer (il figure en exercice dans le poly) — connaître le squelette de la preuve.

### [ ] Théorème de Liouville — [[ch01-liouville]]
**Pourquoi ce n'est pas l'outil ici.** Liouville **consomme** une borne (et l'holomorphie sur $\C$) pour conclure à la constance ; il ne **produit** aucune inégalité. Une question « majorer $|f'(z)|$ » attend une inégalité avec une constante explicite.
**Quand il le serait.** Juste après : une fois obtenu « $|f(z)|\le C$ pour tout $z\in\C$ » ou « $|f'|\le C$ sur $\C$ » (donc $f'$ constante), pour conclure la question suivante « en déduire que $f$ est affine ».

### [ ] Théorème de Montel — [[ch03-montel]]
**Pourquoi ce n'est pas l'outil ici.** Montel transforme une borne **locale uniforme** en compacité (sous-suites convergentes) ; il ne fournit pas la borne, qui est son hypothèse. Il ne donne pas non plus de constante.
**Quand il le serait.** Pour montrer qu'un sup du type $\sup_{f\in\mathcal F}|f'(0)|$ est **atteint**, après l'avoir majoré par les estimées de Cauchy (voir [[rfx-holo-suites-familles]]).

## Démarche

1. **Que veut-on majorer, et où est l'information ?**
   * $|f^{(n)}(z_0)|$ ou $|a_n|$ à partir d'une borne de $|f|$ sur un cercle ou un disque : estimées de Cauchy, puis optimiser le rayon.
   * $|f(z)|$ à l'intérieur à partir de $|f|$ sur le bord d'un compact : maximum sur le bord (sur $f$ ou sur une auxiliaire $f/h$).
   * $|f(z)|$ ou $|f'(0)|$ pour $f$ à valeurs dans un disque avec un point fixé : Schwarz après normalisation.
   * $M(\rho)$ sur un cercle intermédiaire : trois cercles.
   * $|f'(z)|$ uniforme sur un compact $K\subset\Omega$ à partir d'une borne de $|f|$ sur $\Omega$ : Cauchy avec $r=\tfrac12\dist(K,\partial\Omega)$, c'est l'estimation équilipschitzienne [[ch03-montel-equilipschitz]].
2. **Écrire les hypothèses géométriques** : « $\bar D(z_0,r)\subset\Omega$ car ... », « $\bar\Omega$ compact, $\Omega$ connexe, $f$ continue sur $\bar\Omega$ », « $g$ envoie $D$ dans $\bar D$ et $g(0)=0$ ».
3. **Appliquer et optimiser** : rayon $r$ variable, exposant, choix de $h$. Garder les constantes explicites ($M/(1-|z|)$, $R/r$, $(3-2\sqrt2)$...).
4. **Si l'inégalité demandée a une forme d'égalité** (« avec égalité si et seulement si ») : identifier le cas d'égalité par le principe du maximum (fonction auxiliaire constante de module $1$) ou par Schwarz (rotation).

## Pièges

* Cercle de Cauchy sortant de $\Omega$ ou touchant une singularité.
* Majorer $\sup_{C(z_0,r)}|f|$ par $\sup_{\Omega}|f|$ quand ce dernier est infini : la borne doit être **locale** ; pour $f$ non bornée sur $D$, utiliser une majoration dépendant de $r$ et optimiser.
* Oublier la **compacité** ou la **continuité au bord** dans le principe du maximum : « $|f|\le1$ sur $D$ » ne découle pas de « $|f|\le1$ sur le cercle » sans continuité sur $\bar D$.
* Schwarz sans $f(0)=0$ ou avec $f(D)\not\subset\bar D$ : normaliser d'abord, et vérifier que la normalisation est holomorphe (automorphisme de $D$, pas de division par zéro).
* Confondre $|f'(0)|\le1$ (Schwarz) et $|f'(z)|\le1$ partout (faux : $f(z)=z^2$, $f'(z)=2z$).
* Pour une **minoration** de $|f|$, le principe du maximum s'applique à $1/f$ seulement si $f$ **ne s'annule pas** : le dire.

## Mini-exemple

*Énoncé.* $f\in\Hol(D)$ avec $|f|\le M$ sur $D=D(0,1)$. Montrer que $|f'(z)|\le\dfrac M{1-|z|}$ pour tout $z\in D$, que $|a_n|\le M$ pour tout $n$ où $f=\sum a_nz^n$, et que si de plus $f(0)=0$ alors $|f(z)|\le M|z|$.

*Solution.* Soit $z\in D$ et $0<r<1-|z|$. Pour $|\omega-z|\le r$, $|\omega|\le|z|+r<1$ donc $\bar D(z,r)\subset D$. Les estimées de Cauchy [[ch01-estimees-cauchy]] en $z$ avec $n=1$ donnent $|f'(z)|\le\sup_{C(z,r)}|f|/r\le M/r$. En faisant tendre $r$ vers $1-|z|$ : $|f'(z)|\le M/(1-|z|)$. De même en $0$ avec $r<1$ : $|a_n|\le M/r^n$, puis $r\to1$ donne $|a_n|\le M$. Enfin si $f(0)=0$, la fonction $g=f/M$ est holomorphe sur $D$, à valeurs dans $\bar D$, et $g(0)=0$ : le lemme de Schwarz [[ch01-lemme-schwarz]] donne $|g(z)|\le|z|$, c'est-à-dire $|f(z)|\le M|z|$ (et $|f'(0)|\le M$, ce qui raffine la première inégalité en $0$).
