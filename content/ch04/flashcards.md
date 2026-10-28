## CARD id=fc-ch04-001 ref=ch04-transformation-conforme-def tags=definition,enonce
### Q
Que signifie « $f$ **conserve les angles** en $z_0$ » (transformation conforme, § IV.1) ? Préciser le cadre.
### R
Cadre : $f\in\Hol(\Omega)$, $z_0\in\Omega$ avec $f'(z_0)\neq 0$, et deux arcs de classe $C^1$ $\gamma_1,\gamma_2 : ]-1,1[\to\C$ avec $\gamma_j(0)=z_0$, **réguliers** en $t=0$ : $\gamma_j'(0)\neq0$ ($\gamma_j'(0)$ = vecteur tangent en $z_0$).

$f$ conserve les angles en $z_0$ si l'angle (orienté) entre les tangentes $\gamma_1'(0)$ et $\gamma_2'(0)$ est égal à l'angle entre les tangentes aux arcs images $f\circ\gamma_1$ et $f\circ\gamma_2$ en $f(z_0)$. On dit que les fonctions holomorphes (à dérivée non nulle) sont des **transformations conformes**. (poly, § IV.1, p. 75 ; « conforme en $z$ » dès la Remarque I.2.5, p. 8)

> ⚠️ Au § III.4, « transformation conforme » désigne aussi un **biholomorphisme** $\Omega\to D$.

## CARD id=fc-ch04-002 ref=ch04-holomorphe-conserve-angles tags=enonce
### Q
Énoncer le résultat de conservation des angles par une fonction holomorphe (§ IV.1).
### R
Soient $f\in\Hol(\Omega)$, $z_0\in\Omega$ avec $f'(z_0)\neq0$, et $\gamma_1,\gamma_2:]-1,1[\to\C$ deux arcs $C^1$ avec $\gamma_j(0)=z_0$ et $\gamma_j'(0)\neq0$. Alors l'arc image $f\circ\gamma_j$ a pour tangente en $t=0$
$$(f\circ\gamma_j)'(0)=f'(z_0)\,\gamma_j'(0),$$
donc l'angle entre les tangentes à $\gamma_1,\gamma_2$ en $z_0$ est égal à l'angle entre les tangentes aux arcs images en $f(z_0)$. Autrement dit, la jacobienne de $f$ en $z_0$ (multiplication par $f'(z_0)$) est une **similitude directe** : $f$ est conforme en $z_0$. (poly, § IV.1, p. 75)

## CARD id=fc-ch04-003 ref=ch04-holomorphe-conserve-angles tags=formule
### Q
Écrire la jacobienne réelle en $z_0$ d'une fonction holomorphe $f=u+iv$, avec $f'(z_0)=a+ib$. Que vaut son déterminant ?
### R
$$J_f(z_0)=\begin{pmatrix} u_x & u_y\\ v_x & v_y\end{pmatrix}=\begin{pmatrix} a & -b\\ b & a\end{pmatrix},\qquad \det J_f(z_0)=a^2+b^2=|f'(z_0)|^2.$$
(Cauchy–Riemann : $u_x=v_y$, $u_y=-v_x$.) C'est la composée de la rotation d'angle $\arg f'(z_0)$ et de l'homothétie de rapport $|f'(z_0)|$ : longueurs multipliées par $|f'(z_0)|$, angles orientés et orientation conservés si $f'(z_0)\neq0$. (poly, Remarque I.2.5, p. 8 ; § IV.1, p. 75)

## CARD id=fc-ch04-004 ref=ch04-holomorphe-conserve-angles tags=contre-exemple
### Q
Contre-exemples à la conservation des angles : (a) si $f'(z_0)=0$ ; (b) si $f$ n'est pas holomorphe.
### R
(a) $f(z)=z^2$ en $z_0=0$ : $(f\circ\gamma)'(0)=2\gamma(0)\gamma'(0)=0$, la tangente image dégénère ; les demi-axes $\R_+$ et $i\R_+$ (angle $\pi/2$) sont envoyés sur $\R_+$ et $\R_-$ (angle $\pi$) : les angles sont **doublés**. Plus généralement, si $f(z)-f(z_0)\sim c\,(z-z_0)^{k}$ avec $c\neq0$, les angles en $z_0$ sont multipliés par $k$.

(b) $f(z)=\bar z$ : conserve la mesure des angles mais **renverse** l'orientation (jacobienne de déterminant $-1$) : ce n'est pas une similitude directe.

## CARD id=fc-ch04-005 ref=ch04-zeros-derivee-isoles tags=hypothese
### Q
Pourquoi l'hypothèse $f'(z_0)\neq0$ du § IV.1 n'est-elle « pas très restrictive » ?
### R
Par le principe des zéros isolés (Théorème I.11.1) appliqué à $f'$ : pourvu que $f$ ne soit pas localement constante (i.e. $f'\not\equiv0$ sur chaque composante connexe de $\Omega$), les zéros de $f'$ sont **isolés**. Une fonction holomorphe est donc conforme partout sauf sur un ensemble discret. (poly, Remarque IV.1.1, p. 75)

## CARD id=fc-ch04-006 ref=ch04-lignes-niveau-orthogonales tags=enonce
### Q
Énoncer le résultat sur les lignes de niveau de $\Re(f)$ et $\Im(f)$ pour $f$ holomorphe.
### R
Soient $f\in\Hol(\Omega)$ et $z_0\in\Omega$ avec $f'(z_0)\neq0$. Au voisinage de $z_0$, les lignes de niveau $\Re(f)=c$ et $\Im(f)=c'$ sont les images des droites $\Re(w)=c$ (verticales) et $\Im(w)=c'$ (horizontales) par la réciproque $f^{-1}$, holomorphe au voisinage de $f(z_0)$ (Proposition I.4.4). Par conservation des angles, ce sont des courbes dont les **tangentes sont orthogonales** en leurs points d'intersection. Plus généralement, l'image par $f$ du « grillage » horizontal/vertical (là où $f'\neq0$) est un grillage de courbes orthogonales. (poly, § IV.1, p. 75-76)

## CARD id=fc-ch04-007 ref=ch04-lignes-niveau-orthogonales tags=methode
### Q
Pour montrer que les familles de courbes $\{u=c\}$ et $\{v=c'\}$ sont orthogonales, on ...
### R
... reconnaît $u+iv=f$ holomorphe avec $f'\neq0$ et on applique [[ch04-lignes-niveau-orthogonales]]. Vérification directe : les normales sont $\nabla u$ et $\nabla v$, et par Cauchy–Riemann ($v_x=-u_y$, $v_y=u_x$)
$$\nabla u\cdot\nabla v=u_xv_x+u_yv_y=-u_xu_y+u_yu_x=0,$$
avec $|\nabla u|=|\nabla v|=|f'|\neq0$. Exemple : $f=\operatorname{argtanh}$ donne deux familles de cercles orthogonaux (équipotentielles et lignes de champ de deux fils, Exemple IV.1.2, p. 76).

## CARD id=fc-ch04-008 ref=ch04-harmonique-def tags=definition,enonce
### Q
Définir une fonction harmonique (Définition IV.2.1), avec le laplacien.
### R
Une fonction $f:\Omega\to\C$ ($\Omega$ ouvert de $\C$) est **harmonique** si elle est de classe $C^2$ sur $\Omega$ et si
$$\Delta f:=\frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2}=4\,\frac{\partial^2 f}{\partial z\,\partial\bar z}=4\,\frac{\partial^2 f}{\partial\bar z\,\partial z}=0.$$
Les valeurs **complexes** sont autorisées. (poly, Définition IV.2.1, p. 76)

## CARD id=fc-ch04-009 ref=ch04-harmonique-def tags=formule
### Q
Rappeler $\dfrac{\partial}{\partial z}$, $\dfrac{\partial}{\partial\bar z}$ et en déduire $\Delta$ en coordonnées complexes.
### R
$$\frac{\partial}{\partial z}=\frac12\Big(\frac{\partial}{\partial x}-i\frac{\partial}{\partial y}\Big),\qquad \frac{\partial}{\partial \bar z}=\frac12\Big(\frac{\partial}{\partial x}+i\frac{\partial}{\partial y}\Big),$$
donc, pour $f$ de classe $C^2$ (Schwarz : $\partial_x\partial_y f=\partial_y\partial_x f$),
$$4\,\frac{\partial^2 f}{\partial z\,\partial\bar z}=(\partial_x-i\partial_y)(\partial_x+i\partial_y)f=\frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2}=\Delta f.$$
(poly, Remarque I.2.8 ; Définition IV.2.1, p. 76)

## CARD id=fc-ch04-010 ref=ch04-harmonique-def tags=hypothese
### Q
Dans la Définition IV.2.1, à quoi sert l'hypothèse « de classe $C^2$ » ? Est-elle une vraie restriction ?
### R
Elle sert à donner un sens à $\Delta f$ et à appliquer le **théorème de Schwarz**, qui donne $\Delta=4\,\partial_z\partial_{\bar z}=4\,\partial_{\bar z}\partial_z$. A posteriori ce n'est pas restrictif : une fonction harmonique s'écrit localement $f+\bar g$ avec $f,g$ holomorphes (Remarque IV.2.3), donc elle est $C^\infty$.

## CARD id=fc-ch04-011 ref=ch04-harmonique-def tags=contre-exemple
### Q
Parmi $|z|^2$, $x^2-y^2$, $e^x\cos y$, $\log|z|$, lesquelles sont harmoniques (et où) ?
### R
* $|z|^2=z\bar z$ : $4\,\partial_z\partial_{\bar z}(z\bar z)=4\neq0$, **non** harmonique (bien que $C^\infty$).
* $x^2-y^2=\Re(z^2)$ et $e^x\cos y=\Re(e^z)$ : harmoniques sur $\C$ (parties réelles d'holomorphes).
* $\log|z|=\tfrac12\log(z\bar z)$ : $\partial_{\bar z}\log|z|=\dfrac{1}{2\bar z}$, puis $\partial_z\big(\tfrac{1}{2\bar z}\big)=0$ : harmonique sur $\C^*$ (pas définie en $0$).

## CARD id=fc-ch04-012 ref=ch04-holomorphe-implique-harmonique tags=enonce
### Q
Si $f\in\Hol(\Omega)$, quelles fonctions construites à partir de $f$ sont harmoniques ? Pourquoi ?
### R
$f$, $\bar f$, $\Re(f)=\tfrac12(f+\bar f)$ et $\Im(f)=\tfrac1{2i}(f-\bar f)$ sont harmoniques. (poly, § IV.2, p. 76)

Preuve : $f$ est $C^\infty$ (Théorème I.7.4) et $\partial_{\bar z}f=0$, donc $\Delta f=4\,\partial_z(\partial_{\bar z}f)=0$ ; et $\partial_z\bar f=\overline{\partial_{\bar z}f}=0$, donc $\Delta\bar f=4\,\partial_{\bar z}(\partial_z\bar f)=0$ ; puis linéarité. Le Théorème IV.2.2 dit que ce sont « essentiellement les seuls exemples ».

## CARD id=fc-ch04-013 ref=ch04-harmonique-f-plus-g-barre tags=enonce
### Q
Énoncer le Théorème IV.2.2 (décomposition des fonctions harmoniques).
### R
Toute fonction harmonique $h:\Omega\to\C$, définie sur un ouvert $\Omega$ **simplement connexe**, s'écrit sous la forme
$$h=f+\bar g\qquad\text{où } f,g\in\Hol(\Omega).$$
(poly, Théorème IV.2.2, p. 76). Le couple $(f,g)$ n'est pas unique : $(f+c,\ g-\bar c)$ convient aussi.

## CARD id=fc-ch04-014 ref=ch04-harmonique-f-plus-g-barre tags=methode
### Q
Preuve du Théorème IV.2.2 : comment construit-on $f$ et $g$ à partir de $h$ ?
### R
1. $\partial_{\bar z}\big(\partial_z h\big)=\tfrac14\Delta h=0$ et $\partial_z h$ est $C^1$, donc $\partial_z h\in\Hol(\Omega)$.
2. $\Omega$ simplement connexe : $\partial_z h$ admet une **primitive holomorphe** $f$ (Théorème II.9.1).
3. $0=\overline{\partial_z h-\partial_z f}=\overline{\partial_z(h-f)}=\partial_{\bar z}\overline{(h-f)}$, donc $g:=\overline{h-f}$ est holomorphe, et $h=f+\bar g$.

(poly, Théorème IV.2.2, p. 77) ⚠️ C'est $\overline{h-f}$ qui est holomorphe, pas $h-f$.

## CARD id=fc-ch04-015 ref=ch04-harmonique-f-plus-g-barre tags=hypothese
### Q
Dans le Théorème IV.2.2, où sert la simple connexité de $\Omega$ ? Que reste-t-il si on la retire ?
### R
Elle sert **uniquement** à trouver une primitive holomorphe globale $f$ de $\partial_z h$ (Théorème II.9.1). Sans elle, la conclusion globale peut tomber (voir $\log|z|$ sur $\C^*$), mais elle reste vraie **localement** : sur tout disque $D\subset\Omega$ (simplement connexe), $h|_D=f_D+\overline{g_D}$ avec $f_D,g_D\in\Hol(D)$ (Remarque IV.2.3, p. 77).

## CARD id=fc-ch04-016 ref=ch04-harmonique-f-plus-g-barre tags=contre-exemple
### Q
Donner une fonction harmonique sur un ouvert non simplement connexe qui ne s'écrit pas $f+\bar g$ globalement. Justifier.
### R
$h(z)=\log|z|$ sur $\C^*$. Si $h=f+\bar g$ avec $f,g\in\Hol(\C^*)$, comme $h$ est réelle, $h=\Re(F)$ avec $F=f+g$ holomorphe. Alors $F'=\partial_x h-i\,\partial_y h=\dfrac{x-iy}{|z|^2}=\dfrac1z$ : $F$ serait une primitive de $1/z$ sur $\C^*$, impossible car $\oint_{C(0,1)}\dfrac{dz}{z}=2i\pi\neq0$.

## CARD id=fc-ch04-017 ref=ch04-harmonique-decomposition-locale tags=enonce
### Q
Énoncer la Remarque IV.2.3 (cas d'un ouvert quelconque). Quelle conséquence sur la régularité ?
### R
Si $\Omega$ n'est pas simplement connexe, par restriction à des disques (simplement connexes), toute fonction harmonique sur $\Omega$ s'écrit **localement** comme somme d'une fonction holomorphe et de la conjuguée d'une fonction holomorphe : pour tout disque $D\subset\Omega$, $h|_D=f_D+\overline{g_D}$, $f_D,g_D\in\Hol(D)$. (poly, Remarque IV.2.3, p. 77)

Conséquence : toute fonction harmonique est $C^\infty$.

## CARD id=fc-ch04-018 ref=ch04-harmonique-reelle-partie-reelle tags=enonce
### Q
Énoncer le Corollaire IV.2.4.
### R
Une fonction harmonique **réelle**, définie sur un ouvert **simplement connexe** $\Omega$, est la partie réelle d'une fonction holomorphe $F\in\Hol(\Omega)$, **unique à une constante additive imaginaire pure près**. (poly, Corollaire IV.2.4, p. 77)

Preuve : $h=f+\bar g$ (Théorème IV.2.2) et $h=\bar h=\bar f+g$, donc $2h=f+\bar f+g+\bar g=2\Re(f+g)$ : $F=f+g$.

## CARD id=fc-ch04-019 ref=ch04-harmonique-reelle-partie-reelle tags=hypothese
### Q
Corollaire IV.2.4 : rôle de « réelle », de « simplement connexe », et d'où vient l'unicité ?
### R
* **Réelle** : permet $h=\bar h$, d'où $h=\Re(f+g)$. (Pour $h$ complexe, appliquer à $\Re(h)$ et $\Im(h)$.)
* **Simplement connexe** : via le Théorème IV.2.2 (primitive globale). Sinon : faux, $\log|z|$ sur $\C^*$.
* **Unicité** : si $\Re(F_1)=\Re(F_2)$, $F_1-F_2$ est holomorphe à valeurs dans $i\R$ ; par Cauchy–Riemann ses dérivées partielles sont nulles, donc elle est constante sur $\Omega$ **connexe** (inclus dans « simplement connexe », Définition II.1.1). Sur un ouvert non connexe, la constante pourrait changer d'une composante à l'autre.

## CARD id=fc-ch04-020 ref=ch04-harmonique-reelle-partie-reelle tags=contre-exemple
### Q
Contre-exemple au Corollaire IV.2.4 sans simple connexité ; que se passe-t-il pour la « conjuguée harmonique » ?
### R
$h=\log|z|$, harmonique réelle sur $\C^*$. Sur $\C\setminus\R_-$, $h=\Re(\mathrm{Log}\,z)$, de conjuguée $\Im(\mathrm{Log}\,z)=\mathrm{Arg}\,z$. Mais aucune $F\in\Hol(\C^*)$ ne vérifie $\Re(F)=\log|z|$ : on aurait $F'=1/z$, qui n'a pas de primitive sur $\C^*$ ($\oint_{C(0,1)}dz/z=2i\pi$). La « conjuguée » $\arg z$ augmente de $2\pi$ après un tour autour de $0$.

## CARD id=fc-ch04-021 ref=ch04-harmonique-reelle-partie-reelle tags=methode
### Q
Pour trouver explicitement $F$ holomorphe avec $\Re(F)=h$ ($h$ harmonique réelle donnée), on ...
### R
... utilise $F'=\partial_x h-i\,\partial_y h$ (si $F=h+iv$, Cauchy–Riemann donne $F'=h_x+iv_x=h_x-ih_y$). Cette fonction est holomorphe ; on la reconnaît (ou on l'intègre sur $\Omega$ simplement connexe), puis on ajuste la constante pour que $\Re(F)=h$.

Exemple : $h=x^2-y^2$ : $F'=2x+2iy=2z$, $F=z^2+i c$, $c\in\R$.

## CARD id=fc-ch04-022 ref=ch04-harmonique-moyenne-maximum tags=enonce
### Q
Énoncer le Corollaire IV.2.5 (moyenne et principe du maximum).
### R
Une fonction harmonique **réelle** $h$, définie sur un ouvert $\Omega$, vérifie la **propriété de la moyenne**. Si de plus $\Omega$ est **connexe**, elle vérifie le **principe du maximum** : si $h$ admet un maximum **local** en $z_0\in\Omega$, alors $h$ est constante sur $\Omega$. (poly, Corollaire IV.2.5, p. 77)

## CARD id=fc-ch04-023 ref=ch04-harmonique-moyenne-maximum tags=formule
### Q
Écrire la propriété de la moyenne pour $h$ harmonique (avec la condition sur le disque). D'où vient-elle ?
### R
Pour tout disque fermé $\bar D(z_0,r)\subset\Omega$ :
$$h(z_0)=\frac1{2\pi}\int_0^{2\pi}h\big(z_0+re^{i\theta}\big)\,d\theta.$$
Elle vient de la formule de la moyenne pour les fonctions holomorphes (Corollaire I.6.2) appliquée à $f$ et à $g$ dans l'écriture locale $h=f+\bar g$ (Remarque IV.2.3), puis linéarité et conjugaison. (poly, Corollaire IV.2.5, p. 77)

## CARD id=fc-ch04-024 ref=ch04-harmonique-moyenne-maximum tags=hypothese
### Q
Principe du maximum harmonique (Corollaire IV.2.5) : rôle de chaque hypothèse ? Et pour un minimum ?
### R
* $h$ **réelle** : « maximum de $h$ » n'a de sens que pour $h$ réelle (sinon appliquer à $\Re(h)$, $\Im(h)$).
* $h$ **harmonique** : fournit la propriété de la moyenne, cœur de la preuve.
* $\Omega$ **connexe** : passage de « constante près de $z_0$ » à « constante sur $\Omega$ » (ensemble ouvert et fermé).
* Maximum en un point **intérieur** $z_0\in\Omega$.

Minimum local : appliquer le résultat à $-h$ (harmonique).

## CARD id=fc-ch04-025 ref=ch04-harmonique-moyenne-maximum tags=contre-exemple
### Q
Contre-exemples au principe du maximum harmonique si l'on retire (a) la connexité, (b) l'harmonicité.
### R
(a) $\Omega=D(0,1)\cup D(3,1)$, $h=0$ sur le premier disque et $h=1$ sur le second : harmonique, maximum local en tout point, non constante sur $\Omega$.

(b) $h=-|z|^2=-(x^2+y^2)$ sur $D(0,1)$ : maximum (global) en $0$, non constante ; $\Delta h=-4\neq0$. Ici la moyenne sur $C(0,r)$ vaut $-r^2<0=h(0)$.

## CARD id=fc-ch04-026 ref=ch04-harmonique-moyenne-maximum tags=methode
### Q
Preuve du principe du maximum harmonique : quelles sont les deux étapes ?
### R
1. **Local** : si $h\le h(z_0)$ sur $\bar D(z_0,r)\subset\Omega$, la fonction continue $\theta\mapsto h(z_0)-h(z_0+\rho e^{i\theta})$ est $\ge0$ et d'intégrale nulle (moyenne) pour tout $\rho\le r$, donc nulle : $h$ est constante sur $\bar D(z_0,r)$.
2. **Global** : un ensemble ouvert, fermé et non vide de $\Omega$ connexe est $\Omega$ tout entier.

⚠️ Pour que l'étape 2 soit rigoureuse avec un maximum seulement **local**, prendre l'ensemble des points au voisinage desquels $h\equiv h(z_0)$, et montrer qu'il est fermé grâce au principe d'identité (localement $h=\Re(F)$, $F'=h_x-ih_y$ holomorphe nulle sur un ouvert, Théorème I.11.1). (poly, Corollaire IV.2.5, p. 77)

## CARD id=fc-ch04-027 ref=ch04-maximum-unicite-bord tags=enonce
### Q
Que dit la Remarque IV.2.6 ? Donner la version précise de l'unicité pour le problème de Dirichlet.
### R
Le principe du maximum donne bien souvent l'**unicité** des fonctions harmoniques vérifiant des conditions au bord fixées. (poly, Remarque IV.2.6, p. 77)

Version précise : si $\Omega$ est un ouvert **connexe borné**, et $h_1,h_2$ réelles, harmoniques sur $\Omega$, **continues sur $\bar\Omega$** et égales sur $\partial\Omega$, alors $h_1=h_2$. En effet $u=h_1-h_2$ atteint son max et son min sur le compact $\bar\Omega$ ; s'ils sont atteints à l'intérieur, $u$ est constante (Corollaire IV.2.5), égale à sa valeur $0$ au bord ; donc $\max u\le 0\le\min u$.

## CARD id=fc-ch04-028 ref=ch04-maximum-unicite-bord tags=contre-exemple
### Q
L'unicité du problème de Dirichlet tient-elle sur un ouvert non borné comme $H$ ?
### R
Non sans hypothèse supplémentaire : $u(z)=\Im(z)=y$ est harmonique sur $H=\{\Im(z)>0\}$, continue sur $\bar H$, nulle sur $\partial H=\R$, mais non nulle. Il faut une hypothèse de **bornitude** (argument de type Phragmén–Lindelöf, ou passage au disque par une homographie), comme le signale le poly au § IV.4.1 (p. 82).

## CARD id=fc-ch04-029 ref=ch04-composition-harmonique-holomorphe tags=enonce
### Q
Énoncer le résultat de composition « harmonique $\circ$ holomorphe » (§ IV.4).
### R
Si $h$ est holomorphe et $f$ harmonique (de classe $C^2$, $\Delta f=0$) sur un ouvert contenant l'image de $h$, alors $f\circ h$ est **harmonique** (là où elle est définie). Plus précisément, pour tout $z$ :
$$\Delta(f\circ h)(z)=4\,\frac{\partial^2 f}{\partial z\,\partial\bar z}\big(h(z)\big)\,\frac{\partial h}{\partial z}(z)\,\frac{\partial\bar h}{\partial\bar z}(z)=(\Delta f)\big(h(z)\big)\,|h'(z)|^2.$$
(poly, § IV.4, p. 81-82)

## CARD id=fc-ch04-030 ref=ch04-composition-harmonique-holomorphe tags=formule
### Q
Formule du laplacien d'une composée $f\circ h$, $h$ holomorphe, et règle de dérivation qui la donne.
### R
$$\Delta(f\circ h)=(\Delta f)\circ h\;|h'|^2.$$
Elle vient de la règle de composition (Lemme I.2.9) :
$$\frac{\partial(f\circ h)}{\partial\bar z}=\Big(\frac{\partial f}{\partial z}\circ h\Big)\frac{\partial h}{\partial\bar z}+\Big(\frac{\partial f}{\partial\bar z}\circ h\Big)\frac{\partial\bar h}{\partial\bar z},$$
où $\partial_{\bar z}h=0$ et $\partial_z\bar h=0$ ($h$ holomorphe), et $\partial_{\bar z}\bar h=\overline{h'}$.

## CARD id=fc-ch04-031 ref=ch04-composition-harmonique-holomorphe tags=methode
### Q
Preuve que $f\circ h$ est harmonique ($f$ harmonique, $h$ holomorphe) : les étapes.
### R
1. $\partial_{\bar z}(f\circ h)=(\partial_{\bar z}f)(h)\,\partial_{\bar z}\bar h$ (Lemme I.2.9 et $\partial_{\bar z}h=0$).
2. On applique $\partial_z$ (règle du produit). Le terme $(\partial_{\bar z}f)(h)\,\partial_z\partial_{\bar z}\bar h$ est nul : par Schwarz $\partial_z\partial_{\bar z}\bar h=\partial_{\bar z}(\partial_z\bar h)=0$.
3. $\partial_z\big[(\partial_{\bar z}f)\circ h\big]=(\partial_z\partial_{\bar z}f)(h)\,\partial_z h$ (Lemme I.2.9 et $\partial_z\bar h=0$).
4. Donc $\Delta(f\circ h)=4(\partial_z\partial_{\bar z}f)(h)\,\partial_zh\,\partial_{\bar z}\bar h=(\Delta f)(h)\,|h'|^2=0$. (poly, § IV.4, p. 81-82)

## CARD id=fc-ch04-032 ref=ch04-composition-harmonique-holomorphe tags=hypothese
### Q
Dans « $f\circ h$ harmonique », que se passe-t-il si $h$ n'est pas holomorphe, ou si l'on compose dans l'autre ordre ?
### R
* $h$ seulement $C^\infty$ : faux en général (le terme croisé $\partial_{\bar z}h$ ne s'annule plus). Si $h$ est **anti**-holomorphe, cela reste vrai : $\Delta(f\circ h)=(\Delta f)\circ h\,|\partial_{\bar z}h|^2$.
* Ordre inverse « holomorphe $\circ$ harmonique » : faux en général.
* $f$ doit être $C^2$ et harmonique sur un ouvert **contenant l'image** de $h$.

## CARD id=fc-ch04-033 ref=ch04-composition-harmonique-holomorphe tags=contre-exemple
### Q
Contre-exemples : (a) $f$ harmonique, $h$ lisse non holomorphe, $f\circ h$ non harmonique ; (b) ordre inverse.
### R
(a) $f(w)=\Re(w^2)=u^2-v^2$ et $h(z)=x+2iy$ ($\R$-linéaire, non holomorphe) : $f\circ h=x^2-4y^2$, $\Delta=2-8=-6\neq0$.

(b) $f(z)=x$ (harmonique) et $h(w)=w^2$ (holomorphe) : $h\circ f=x^2$, $\Delta(x^2)=2\neq0$.

## CARD id=fc-ch04-034 ref=ch04-reduction-demi-plan tags=enonce
### Q
Expliquer la méthode du § IV.4 pour chercher une fonction harmonique sur $\Omega$ avec des conditions au bord.
### R
Si l'on cherche $\Phi$ harmonique sur un ouvert **simplement connexe** $\Omega$ vérifiant des conditions au bord, il « suffit » de :
1. trouver une application **biholomorphe** $h$ de $\Omega$ sur $\C$ ou sur $H$ (existe si $\Omega\neq\C$ par le théorème de Riemann, Théorème III.4.1, et la Remarque III.4.2 pour passer de $D$ à $H$) ;
2. résoudre le problème sur le domaine modèle ($\Phi_0$ sur $H$) ;
3. poser $\Phi=\Phi_0\circ h$, harmonique par [[ch04-composition-harmonique-holomorphe]].

$h$ étant conforme, une dérivée normale nulle au bord (Neumann) est préservée. (poly, § IV.4, p. 82)

## CARD id=fc-ch04-035 ref=ch04-reduction-demi-plan tags=hypothese
### Q
Limites de la méthode « transport vers $H$ par Riemann » ? Dans quel sens compose-t-on ?
### R
* Riemann exige $\Omega$ **simplement connexe** et $\Omega\neq\C$, et ne donne que l'**existence** de $h$ : en pratique on cherche $h$ explicite ($z^{1/(2\alpha)}$, Joukovski, homographie, $\mathrm{Log}$).
* Une couronne n'est pas simplement connexe : on utilise une homographie pour la **centrer** (§ IV.4.2), pas pour l'envoyer sur $H$.
* Sens : $h$ va du domaine **physique** $\Omega$ vers le domaine **modèle**, et $\Phi=\Phi_0\circ h$ ; c'est $\Phi_0$ qui doit vérifier la condition au bord.

## CARD id=fc-ch04-036 ref=ch04-reduction-demi-plan tags=formule
### Q
Biholomorphisme explicite du disque unité $D$ sur le demi-plan de Poincaré $H$ ?
### R
$$z\mapsto i\,\frac{1-z}{1+z}$$
envoie $D$ sur $H$ ($0\mapsto i$ ; pour $z=e^{i\theta}$, $\frac{1-e^{i\theta}}{1+e^{i\theta}}=-i\tan(\theta/2)$, donc l'image du cercle est $\R\cup\{\infty\}$). (poly, Exemple I.4.3 cité par la Remarque III.4.2)

## CARD id=fc-ch04-037 ref=ch04-ecoulement-potentiel tags=methode
### Q
Écoulement plan d'un fluide parfait, incompressible, irrotationnel : pourquoi le potentiel des vitesses est-il harmonique et quelle condition au bord ?
### R
$\mathrm{rot}\,\vec v=0$ donne $\vec v=\nabla\Phi$ (sur $\Omega$ simplement connexe) ; $\mathrm{div}\,\vec v=0$ donne $\mathrm{div}(\nabla\Phi)=\Delta\Phi=0$ : $\Phi$ est **harmonique**. Bord étanche : composante normale de $\vec v$ nulle, i.e. **dérivée normale de $\Phi$ nulle** au bord (Neumann). Sur $H$ avec vitesse bornée ($|\nabla\Phi_0|\in L^\infty(\bar H)$) : $v_y=\partial_y\Phi_0$ est harmonique, bornée, nulle sur $\R$, donc nulle ; $\Phi_0$ ne dépend alors que de $x$ et $\partial_x^2\Phi_0=0$, d'où $\Phi_0(z)=\lambda\,\Re(z)$, $\lambda\in\R$ (à une constante additive près, sans effet sur $\vec v=(\lambda,0)$ : écoulement uniforme). (poly, § IV.4.1, p. 82)

## CARD id=fc-ch04-038 ref=ch04-ecoulement-potentiel tags=contre-exemple
### Q
Sur $H$, pourquoi faut-il supposer la vitesse bornée pour obtenir $\Phi_0=\lambda\,\Re(z)$ ?
### R
Sinon : $\Phi_0=\Re(z^2)=x^2-y^2$ est harmonique sur $H$, et $\partial_y\Phi_0=-2y$ est nulle sur $\R$ (bord étanche), mais $\Phi_0\neq\lambda x$ ; ici $|\nabla\Phi_0|=2|z|$ n'est pas bornée. L'argument « harmonique nulle au bord $\Rightarrow$ nulle » échoue sur un ouvert non borné sans bornitude.

## CARD id=fc-ch04-039 ref=ch04-ecoulement-coin tags=formule
### Q
Potentiel des vitesses de l'écoulement dans le coin $K_\alpha=\{re^{i\theta}: r>0,\ 0\le\theta\le2\pi\alpha\}$, $\alpha\in]0,1[$ ?
### R
$f(z)=z^{1/(2\alpha)}$ (i.e. $r^{1/(2\alpha)}e^{i\theta/(2\alpha)}$) envoie $K_\alpha$ sur le demi-plan fermé ($0\le\theta/(2\alpha)\le\pi$), d'où
$$\Phi(z)=\lambda\,\Re\big(z^{1/(2\alpha)}\big).$$
Quart de plan ($\alpha=1/4$) : $\Phi(z)=\lambda\,\Re(z^2)$. (poly, § IV.4.1, p. 83)

## CARD id=fc-ch04-040 ref=ch04-joukovski tags=enonce
### Q
Transformation de Joukovski : définition et propriétés principales (§ IV.4.1).
### R
$J(z)=f(z)=\dfrac12\Big(z+\dfrac1z\Big)$ sur $\C^*$. (poly, § IV.4.1, p. 83)
* $J(e^{i\theta})=\cos\theta$ : l'image du cercle unité est le segment $[-1,1]$, **parcouru deux fois**.
* $J(z)=J(1/z)$ : non injective sur $\C^*$ ; $J$ est un biholomorphisme de $\{|z|>1\}$ sur $\C\setminus[-1,1]$.
* $J'(z)=\frac12(1-1/z^2)$ s'annule en $\pm1$ : seuls points non conformes.
* Images de cercles non centrés en $0$ : profils d'ailes d'avion.

## CARD id=fc-ch04-041 ref=ch04-joukovski tags=formule
### Q
Image par $J(z)=\frac12(z+1/z)$ du cercle $C_R$, $R>1$ ? Réciproque de $J$ ?
### R
$J(Re^{i\theta})=\tfrac12\big(R+\tfrac1R\big)\cos\theta+i\,\tfrac12\big(R-\tfrac1R\big)\sin\theta$ : **ellipse** de demi-axes $\tfrac12(R\pm\tfrac1R)$ et de foyers $\pm1$ (car $a^2-b^2=1$).

Réciproque de $\C\setminus[-1,1]$ sur $\{|z|>1\}$ : $z(w)=w+\sqrt{w^2-1}$, avec la détermination de la racine telle que $|z(w)|>1$. (poly, Exercice IV.4.1, p. 84-85)

## CARD id=fc-ch04-042 ref=ch04-joukovski tags=formule
### Q
Potentiel des vitesses de l'écoulement uniforme (direction $x$) autour du disque unité, via Joukovski.
### R
Le modèle est l'écoulement uniforme $\Phi_0(w)=\lambda\,\Re(w)$ sur $\C\setminus[-1,1]$ (la plaque horizontale $[-1,1]$ est une ligne de courant). Avec $J:\{|z|>1\}\to\C\setminus[-1,1]$ :
$$\Phi(z)=\Phi_0\big(J(z)\big)=\frac\lambda2\,\Re\Big(z+\frac1z\Big)=\frac\lambda2\Big(r+\frac1r\Big)\cos\theta\qquad(|z|>1).$$
Le cercle unité est une ligne de courant ($\partial_r\Phi=\frac\lambda2(1-\frac1{r^2})\cos\theta=0$ en $r=1$) et la vitesse tend vers $(\lambda/2,0)$ à l'infini (prendre $\lambda\,\Re(z+1/z)$ si l'on veut une vitesse $\lambda$ à l'infini).

> ⚠️ Le poly imprime « $\Phi(z)=\lambda\,\Re(f^{-1}(z))$ » (p. 84) : coquille, la règle du chapitre est $\Phi=\Phi_0\circ f$ avec $f$ allant du domaine physique vers le domaine modèle.

## CARD id=fc-ch04-043 ref=ch04-joukovski tags=formule
### Q
Potentiel complexe $G=\Phi+i\Psi$ : comment lit-on la vitesse $v=v_x+iv_y$ sur $G'$ ?
### R
$\Psi$ est la fonction de courant (conjuguée harmonique de $\Phi$). Par Cauchy–Riemann ($\partial_x\Psi=-\partial_y\Phi$) :
$$G'(z)=\frac{\partial\Phi}{\partial x}+i\frac{\partial\Psi}{\partial x}=v_x-iv_y,\qquad\text{donc}\qquad v=\overline{G'(z)}.$$
Les lignes de courant sont les courbes $\Psi=\Im(G)=$ const. (poly, Exercice IV.4.1, p. 84)

## CARD id=fc-ch04-044 ref=ch04-harmoniques-radiales tags=enonce
### Q
Quelles sont les fonctions harmoniques sur $\C^\times$ invariantes par rotation ?
### R
Exactement les fonctions
$$z\mapsto\alpha\log|z|+\beta,\qquad\alpha,\beta\text{ constantes}.$$
(poly, § IV.4.2, p. 85 ; Exercice IV.4.2, p. 86)

Sur $\C$ tout entier ($0$ compris), seules les constantes ($\alpha=0$).

## CARD id=fc-ch04-045 ref=ch04-harmoniques-radiales tags=formule
### Q
Laplacien en coordonnées polaires ; cas d'une fonction radiale $u=u(r)$.
### R
$$\Delta u=\frac{\partial^2u}{\partial r^2}+\frac1r\frac{\partial u}{\partial r}+\frac1{r^2}\frac{\partial^2u}{\partial\theta^2}.$$
Pour $u=u(r)$ : $\Delta u=\dfrac1r\big(r\,u'\big)'=0\iff r\,u'=\alpha\iff u=\alpha\ln r+\beta$. (poly, Exercice IV.4.2, p. 86)

## CARD id=fc-ch04-046 ref=ch04-chaleur-couronne tags=enonce
### Q
Température stationnaire dans une couronne centrée en $0$ de rayons $R^-<R^+$, valant $T^-$ sur le cercle intérieur et $T^+$ sur le cercle extérieur ?
### R
Régime permanent : $T$ harmonique ; unique par le principe du maximum (la différence de deux solutions, harmoniques sur la couronne ouverte et continues sur la couronne fermée, qui est compacte, est nulle au bord donc nulle, cf. [[ch04-maximum-unicite-bord]]). Avec les fonctions radiales $\alpha\log|z|+\beta$ :
$$T_{\text{centrée}}(z)=\frac{T^+-T^-}{\ln R^+-\ln R^-}\,\ln|z|+\frac{T^-\ln R^+-T^+\ln R^-}{\ln R^+-\ln R^-}.$$
(Vérification : $|z|=R^\pm$ donne $T^\pm$.) (poly, § IV.4.2, p. 85-86)

## CARD id=fc-ch04-047 ref=ch04-chaleur-couronne tags=hypothese
### Q
Couronne **excentrée** : comment obtenir la température, et quel piège sur les rayons ?
### R
On trouve une homographie $f(z)=\dfrac{az+b}{cz+d}$ qui envoie la couronne excentrée sur une couronne **centrée** de rayons $\rho^-<\rho^+$, et $T=T_{\text{centrée}}\circ f$ (harmonique par composition), où $T_{\text{centrée}}$ est calculée avec $\rho^\pm$, **pas** avec $R^\pm$ : le **module conforme** $\rho^+/\rho^-$ diffère en général de $R^+/R^-$. La couronne n'étant pas simplement connexe, Riemann ne s'applique pas et $T$ n'est pas globalement la partie réelle d'une holomorphe ; l'unicité (principe du maximum) reste valable. (poly, § IV.4.2, p. 86)

## CARD id=fc-ch04-048 ref=ch04-holomorphe-implique-harmonique tags=methode
### Q
Pour résoudre un problème de Dirichlet simple sur $H$ (ex. $T=T_1$ sur $\R_+^*$, $T=T_0$ sur $\R_-^*$), on ...
### R
... cherche $T$ comme partie réelle ou imaginaire d'une holomorphe bien choisie : $\Im(\mathrm{Log}\,z)=\mathrm{Arg}\,z$ est harmonique sur $H$, tend vers $0$ quand $z\to x>0$ et vers $\pi$ quand $z\to x<0$. D'où
$$T(z)=T_1+\frac{T_0-T_1}{\pi}\,\mathrm{Arg}(z),$$
dont les isothermes sont les **demi-droites issues de $0$**. (poly, Exercice IV.4.3, p. 86-87)

## CARD id=fc-ch04-049 ref=ch04-weierstrass-enneper tags=formule
### Q
Représentation de Weierstrass–Enneper d'une surface minimale (§ IV.3) : formule et condition sur $(f,g)$.
### R
Localement, toute surface minimale se paramètre par
$$z\mapsto\Re\Big(\int_{[z_0,z]}(1-g^2)f\,dw,\ \ i\int_{[z_0,z]}(1+g^2)f\,dw,\ \ \int_{[z_0,z]}2gf\,dw\Big),$$
$f,g$ holomorphes sur $\Omega$ ; on autorise $g$ méromorphe pourvu que $f$ s'annule à l'ordre $2m$ en tout pôle d'ordre $m$ de $g$ (intégrandes holomorphes). Exemples : $f=1/w^2$, $g=w$ caténoïde ; $f=i/w^2$, $g=w$ hélicoïde ; $f=1$, $g=w$ Enneper. (poly, § IV.3, p. 78-79)

## CARD id=fc-ch04-050 ref=ch04-condition-periodes tags=methode
### Q
Comment vérifier la condition de périodes $\Re\oint_\gamma\varphi\,dw=0$ ? Exemple de la caténoïde.
### R
Par le **théorème des résidus** : $\oint_\gamma\varphi_k\,dw=2i\pi\sum_a\Ind_\gamma(a)\,\Res_a(\varphi_k)$ (somme sur les pôles $a$ retirés de $\Omega$), puis on garde la partie réelle. Caténoïde ($f=1/w^2$, $g=w$ sur $\C^*$) : $\varphi_1=\frac1{w^2}-1$ et $\varphi_2=\frac{i}{w^2}+i$ ont un résidu nul en $0$ ; $\varphi_3=\frac2w$ a pour résidu $2$, période $4i\pi$, purement imaginaire : la partie réelle l'annule, la condition est vérifiée. (poly, Remarque IV.3.2, p. 79)

## CARD id=fc-ch04-051 ref=none tags=notation
### Q
Notations $\Re e$, $\Im m$ du poly ; $\C^*$, $\C^\times$ ; $\Hol(\Omega)$.
### R
* $\Re e(z)$, $\Im m(z)$ (écrits $\Re(z)$, $\Im(z)$ sur ce site) : parties réelle et imaginaire ; $\Re e(f)=c$, $\Im m(f)=c'$ : lignes de niveau.
* $\C^*=\C^\times=\C\setminus\{0\}$.
* $\Hol(\Omega)$ : ensemble des fonctions holomorphes sur l'ouvert $\Omega$.

## CARD id=fc-ch04-052 ref=none tags=notation
### Q
Que désigne la lettre $H$ au chapitre IV ? (piège)
### R
* Au § IV.4 : $H=\{z\in\C:\Im(z)>0\}$, le **demi-plan de Poincaré** (supérieur) ; $\bar H$ son adhérence.
* Au § IV.3 : $H$ = **courbure moyenne** de la surface ($H\equiv0$ : surface minimale), avec $N$ la normale unitaire.

## CARD id=fc-ch04-053 ref=none tags=notation
### Q
Notations $\bar D(z_0,r)$, $C_R$, $K_\alpha$ du chapitre IV.
### R
* $\bar D(z_0,r)$ : disque **fermé** de centre $z_0$, rayon $r$ ($D(z_0,r)$ : ouvert).
* $C_R$ : cercle de centre $0$ et de rayon $R$ ($C_1$ : cercle unité).
* $K_\alpha=\{z=re^{i\theta}: r>0,\ 0\le\theta\le2\pi\alpha\}$, $\alpha\in]0,1[$ : coin d'ouverture $2\pi\alpha$.

## CARD id=fc-ch04-054 ref=none tags=notation
### Q
Notations physiques du § IV.4 : $\vec v$, $\Phi$, $\Psi$, $G$, $v$.
### R
* $\vec v=(v_x,v_y)$ : champ des vitesses ; $\Phi$ : potentiel des vitesses ($\vec v=\nabla\Phi$).
* $\Psi$ : fonction de courant (conjuguée harmonique de $\Phi$) ; $G=\Phi+i\Psi$ : potentiel complexe, holomorphe.
* $v=v_x+iv_y=\overline{G'(z)}$ : vitesse complexe.
* $\mathrm{rot}$, $\mathrm{div}$, $\nabla$ : rotationnel, divergence, gradient.

## CARD id=fc-ch04-055 ref=none tags=notation
### Q
Notations du § IV.3 : $X$, $X_u$, $X_v$, $\varphi$, $\varphi\cdot\varphi$, $Q$.
### R
* $X:\Omega\to\R^3$ paramétrage de la surface, $z=u+iv$ ; **conforme** si $|X_u|=|X_v|$ et $\langle X_u,X_v\rangle=0$.
* $\varphi:=2\,\partial X/\partial z=X_u-iX_v:\Omega\to\C^3$ (holomorphe ssi $X$ harmonique).
* $\varphi\cdot\varphi:=\varphi_1^2+\varphi_2^2+\varphi_3^2$ : forme **bilinéaire** (pas hermitienne) ; nulle ssi paramétrage conforme.
* $Q=\{w\in\C^3: w_1^2+w_2^2+w_3^2=0\}$ : quadrique dans laquelle $\varphi$ prend ses valeurs.

## CARD id=fc-ch04-056 ref=ch04-harmonique-f-plus-g-barre tags=methode
### Q
Pour montrer qu'une fonction $C^1$ est holomorphe, ou qu'une fonction est anti-holomorphe, en coordonnées complexes, on ...
### R
... vérifie $\partial_{\bar z}u=0$ (holomorphe) ; et $\bar g$ est anti-holomorphe ssi $g$ est holomorphe, via $\partial_{\bar z}\bar u=\overline{\partial_z u}$. Exemples dans le chapitre : $\partial_{\bar z}(\partial_z h)=\frac14\Delta h=0$ montre que $\partial_z h$ est holomorphe pour $h$ harmonique ; $\partial_z(h-f)=0$ montre que $\overline{h-f}$ est holomorphe (preuve du Théorème IV.2.2, p. 77).
