---
id: ch03-riemann-etape-koebe
type: lemma
chapter: 3
title: "Étape clé de la preuve de Riemann : un élément non surjectif de $\Sigma_{z_0}$ n'est pas extrémal pour $|\psi'(z_0)|$"
ref: non numéroté, preuve du Théorème III.4.1, p. 66-67
page: 66
importance: 2
depends: [ch02-logarithme-existence, ch01-automorphismes-disque, ch01-lemme-schwarz, ch01-estimees-cauchy, ch03-riemann-sigma-non-vide, ch01-bijection-holomorphe-reciproque-holomorphe]
tags: [riemann, schwarz, racine-carree, extremal, koebe, automorphismes-disque]
---
## Intuition

> 💡 Si une fonction injective $\psi:\Omega\to\mathbb D$ (avec $\psi(z_0)=0$) laisse un « trou » $\alpha$ dans le disque, on peut l'**étirer** : on envoie le trou en $0$ par un automorphisme, on prend une racine carrée (possible car $0$ est maintenant évité), ce qui « ouvre » l'image et la rapproche du bord, puis on recentre. Le résultat $\psi_1$ est encore injective, à valeurs dans $\mathbb D$, nulle en $z_0$, mais avec une dérivée en $z_0$ **strictement plus grande** en module.

Pourquoi « plus grande » ? Parce qu'on peut revenir de $\psi_1$ à $\psi$ par $F=f_{-\alpha}\circ s\circ f_{-\beta}$ ($s(w)=w^2$), une application de $\mathbb D$ dans $\mathbb D$ fixant $0$ et **non injective** ; le lemme de Schwarz dit qu'une telle application contracte strictement en $0$ : $|F'(0)|<1$. Cette idée (due à Koebe) est le cœur de la preuve du théorème de Riemann ([[ch03-riemann-representation-conforme]]).

Notations : $f_a(z)=\dfrac{z-a}{1-\bar az}$ pour $a\in\mathbb D$ ; c'est une bijection holomorphe de $\mathbb D$ sur $\mathbb D$, $f_a(a)=0$, $f_a(0)=-a$, $f_a^{-1}=f_{-a}$, $f_a'(z)=\dfrac{1-|a|^2}{(1-\bar az)^2}$ ([[ch01-automorphismes-disque]]).

## Énoncé

**Lemme (poly, preuve du Théorème III.4.1, p. 66-67).** Soient $\Omega$ un ouvert connexe et simplement connexe de $\C$, $z_0\in\Omega$,
$$
\Sigma=\{f\in\Hol(\Omega):\ f(\Omega)\subset\mathbb D,\ f \text{ injective}\},\qquad \Sigma_{z_0}=\{f\in\Sigma\mid f(z_0)=0\}.
$$
Si $\psi\in\Sigma_{z_0}$ n'est pas surjective sur $\mathbb D$, il existe $\psi_1\in\Sigma_{z_0}$ telle que $|\psi_1'(z_0)|>|\psi'(z_0)|$.

Conséquence : $\eta:=\sup\{|\psi'(z_0)|,\ \psi\in\Sigma_{z_0}\}$ est fini (si $\bar D(z_0,\rho)\subset\Omega$, l'estimée de Cauchy donne $|\psi'(z_0)|\le1/\rho$ pour tout $\psi\in\Sigma_{z_0}$), et tout $h\in\Sigma_{z_0}$ vérifiant $|h'(z_0)|=\eta$ est surjectif : $h(\Omega)=\mathbb D$.

## Hypothèses

### H1 — $\psi\in\Sigma_{z_0}$ : holomorphe, injective, à valeurs dans $\mathbb D$, nulle en $z_0$

**Rôle.** L'injectivité de $\psi$ donne celle de $g$ puis de $\psi_1$ (donc $\psi_1\in\Sigma$) ; $\psi(\Omega)\subset\mathbb D$ permet de composer par $f_\alpha$ ; $\psi(z_0)=0$ donne $F(0)=0$, hypothèse du lemme de Schwarz, et $\beta^2=-\alpha$.

**Si on la retire.** *Normalisation $\psi(z_0)=0$* : c'est une hypothèse de confort. Si $\psi\in\Sigma$ et $b=\psi(z_0)\ne0$, alors $f_b\circ\psi\in\Sigma_{z_0}$ et $|(f_b\circ\psi)'(z_0)|=\frac{|\psi'(z_0)|}{1-|b|^2}>|\psi'(z_0)|$ : le recentrage seul augmente déjà la dérivée. *Injectivité* : elle est indispensable à la preuve ($g$ doit être injective), mais pas à la conclusion, qui reste vraie a posteriori (une fois Riemann démontré, toute $\psi:\Omega\to\mathbb D$ holomorphe non surjective avec $\psi(z_0)=0$ vérifie $|\psi'(z_0)|<\eta$, par Schwarz appliqué à $\psi\circ h^{-1}$).

### H2 — $\psi$ non surjective

**Rôle.** Elle fournit le point $\alpha\in\mathbb D\setminus\psi(\Omega)$, donc une fonction $f_\alpha\circ\psi$ qui ne s'annule pas et admet une racine carrée.

**Si on la retire.** La conclusion est fausse. Si $\psi\in\Sigma_{z_0}$ est surjective, c'est un biholomorphisme de $\Omega$ sur $\mathbb D$ ; pour tout $\psi_1\in\Sigma_{z_0}$, $\psi_1\circ\psi^{-1}:\mathbb D\to\mathbb D$ fixe $0$, donc (Schwarz) $|\psi_1'(z_0)|=|(\psi_1\circ\psi^{-1})'(0)|\,|\psi'(z_0)|\le|\psi'(z_0)|$. Exemple : $\Omega=\mathbb D$, $z_0=0$, $\psi=\id$ ; aucun $\psi_1\in\Sigma_0$ n'a $|\psi_1'(0)|>1$.

### H3 — $\Omega$ simplement connexe

**Rôle.** Elle donne la racine carrée holomorphe $g$ de la fonction sans zéro $f_\alpha\circ\psi$ (Proposition II.9.3, [[ch02-logarithme-existence]]).

**Si on la retire.** La conclusion devient fausse. Soient $\Omega=\mathbb D^\times=\mathbb D\setminus\{0\}$, $z_0=\frac12$ et $\psi=f_{1/2}|_{\mathbb D^\times}$ : $\psi$ est injective, à valeurs dans $\mathbb D$, $\psi(\frac12)=0$, d'image $\mathbb D\setminus\{f_{1/2}(0)\}=\mathbb D\setminus\{-\frac12\}$ : non surjective. Pourtant aucun $\psi_1\in\Sigma_{1/2}$ ne fait mieux : un tel $\psi_1$ est borné près de $0$, se prolonge donc ([[ch02-singularite-effacable-riemann]]) en $\Psi\in\Hol(\mathbb D)$, non constante, à valeurs dans $\bar{\mathbb D}$ donc dans $\mathbb D$ (principe du maximum), avec $\Psi(\frac12)=0$ ; Schwarz appliqué à $\Psi\circ f_{-1/2}$ (qui fixe $0$) donne $|\Psi'(\frac12)|\cdot|f_{-1/2}'(0)|\le1$, i.e. $|\psi_1'(\frac12)|\le\frac{1}{3/4}=\frac43=|\psi'(\frac12)|$. Ce qui casse : avec $\alpha=-\frac12$, $f_\alpha\circ\psi=\id_{\mathbb D^\times}$, qui n'a pas de racine carrée holomorphe sur $\mathbb D^\times$.

## Idée de la preuve

Avec $\alpha\notin\psi(\Omega)$, on prend $g=\sqrt{f_\alpha\circ\psi}$ (injective, dans $\mathbb D$), puis $\psi_1=f_\beta\circ g$ avec $\beta=g(z_0)$. On a $\psi=F\circ\psi_1$ où $F=f_{-\alpha}\circ s\circ f_{-\beta}$ envoie $\mathbb D$ dans $\mathbb D$, fixe $0$ et n'est pas injective : Schwarz donne $|F'(0)|<1$, donc $|\psi'(z_0)|=|F'(0)||\psi_1'(z_0)|<|\psi_1'(z_0)|$.

## Preuve

Soit $\psi\in\Sigma_{z_0}$ non surjective et $\alpha\in\mathbb D\setminus\psi(\Omega)$.

*Construction de $g$.* Puisque $f_\alpha$ est bijective de $\mathbb D$ dans $\mathbb D$, $f_\alpha\circ\psi$ est holomorphe, injective, à valeurs dans $\mathbb D$ : $f_\alpha\circ\psi\in\Sigma$. Par construction elle ne s'annule pas sur $\Omega$ ($f_\alpha(w)=0\iff w=\alpha$, et $\alpha\notin\psi(\Omega)$). Comme $\Omega$ est simplement connexe, la Proposition II.9.3 ([[ch02-logarithme-existence]]) donne $v\in\Hol(\Omega)$ avec $e^v=f_\alpha\circ\psi$, et $g:=e^{v/2}$ vérifie $g^2=f_\alpha\circ\psi$ (comme à l'étape 1, [[ch03-riemann-sigma-non-vide]]). Si $g(z)=g(z')$, alors $f_\alpha\circ\psi(z)=f_\alpha\circ\psi(z')$, donc $z=z'$ : $g$ est injective. Et pour tout $z\in\Omega$,
$$
|g(z)|^2=|f_\alpha\circ\psi(z)|<1,
$$
donc $g\in\Sigma$.

*Construction de $\psi_1$.* Posons $\beta:=g(z_0)\in\mathbb D$, $s:z\mapsto z^2$ et $\psi_1:=f_\beta\circ g$. Alors $\psi_1$ est holomorphe, injective, à valeurs dans $\mathbb D$ et $\psi_1(z_0)=f_\beta(\beta)=0$ : $\psi_1\in\Sigma_{z_0}$.

*La factorisation.* Comme $f_{-\alpha}=f_\alpha^{-1}$ et $f_{-\beta}=f_\beta^{-1}$,
$$
\psi=f_{-\alpha}\circ g^2=f_{-\alpha}\circ s\circ g=f_{-\alpha}\circ s\circ f_{-\beta}\circ\psi_1=F\circ\psi_1,\qquad F:=f_{-\alpha}\circ s\circ f_{-\beta}.
$$
Comme $\psi_1(z_0)=0$, en dérivant la fonction composée on trouve
$$
\psi'(z_0)=F'(0)\,\psi_1'(z_0).
$$

*Schwarz.* $F$ est holomorphe sur $\mathbb D$, $F(\mathbb D)\subset\mathbb D$ (composée de trois applications de $\mathbb D$ dans $\mathbb D$), et $F(0)=F(\psi_1(z_0))=\psi(z_0)=0$. De plus $F$ n'est pas injective : $f_{-\beta}$ et $f_{-\alpha}$ sont bijectives et $s$ ne l'est pas sur $\mathbb D$ ($s(w)=s(-w)$), donc pour $w\in\mathbb D\setminus\{0\}$, les points distincts $f_\beta(w)$ et $f_\beta(-w)$ ont la même image par $F$. En particulier $F$ n'est pas une rotation. Le lemme de Schwarz ([[ch01-lemme-schwarz]]) donne $|F'(0)|\le1$, et le cas d'égalité ($|F'(0)|=1\Rightarrow F$ rotation) est exclu : $|F'(0)|<1$. Enfin $\psi_1'(z_0)\ne0$ car $\psi_1$ est injective (Remarque I.14.3, [[ch01-bijection-holomorphe-reciproque-holomorphe]]). Donc
$$
|\psi'(z_0)|=|F'(0)|\,|\psi_1'(z_0)|<|\psi_1'(z_0)| .
$$

*Conséquence.* Soit $\rho>0$ avec $\bar D(z_0,\rho)\subset\Omega$. Pour $\psi\in\Sigma_{z_0}$, l'estimée de Cauchy ([[ch01-estimees-cauchy]]) donne $|\psi'(z_0)|\le\frac1\rho\sup_{C(z_0,\rho)}|\psi|\le\frac1\rho$ ; donc $\eta\le\frac1\rho<+\infty$. Si $h\in\Sigma_{z_0}$ vérifie $|h'(z_0)|=\eta$ et n'était pas surjective, ce qui précède fournirait $\psi_1\in\Sigma_{z_0}$ avec $|\psi_1'(z_0)|>\eta$, contredisant la définition de $\eta$. Donc $h(\Omega)=\mathbb D$. $\square$

## Preuve à trous

Soit $\alpha\in\mathbb D\setminus\psi(\Omega)$. La fonction $f_\alpha\circ\psi\in\Sigma$ <trou indice="où s'annule f_α ?">ne s'annule pas sur $\Omega$ (car $f_\alpha$ ne s'annule qu'en $\alpha$)</trou>, donc, $\Omega$ étant simplement connexe, il existe $g\in\Hol(\Omega)$ avec $g^2=f_\alpha\circ\psi$ ; $g$ est injective et $|g|^2=|f_\alpha\circ\psi|<1$, donc $g\in\Sigma$.

On pose $\beta=g(z_0)$, $s(w)=w^2$ et <trou indice="recentrer g">$\psi_1=f_\beta\circ g\in\Sigma_{z_0}$</trou>. Alors
<trou indice="exprimer ψ à partir de ψ₁">$\psi=f_{-\alpha}\circ s\circ g=f_{-\alpha}\circ s\circ f_{-\beta}\circ\psi_1=F\circ\psi_1$</trou>, donc $\psi'(z_0)=F'(0)\psi_1'(z_0)$. Or $F:\mathbb D\to\mathbb D$ est holomorphe, $F(0)=0$, et <trou indice="pourquoi l'inégalité est-elle stricte ?">$F$ n'est pas injective (à cause de $s$), donc n'est pas une rotation, et le lemme de Schwarz donne $|F'(0)|<1$</trou>. D'où $|\psi'(z_0)|<|\psi_1'(z_0)|$ (avec $\psi_1'(z_0)\ne0$).

Enfin $\eta\le1/\rho$ par <trou>l'estimée de Cauchy sur $C(z_0,\rho)$, puisque $|\psi|\le1$</trou>, et un $h$ réalisant $\eta$ est surjectif, sinon on l'améliorerait. $\square$

## Exemples

* **Calcul explicite du gain.** Dans la preuve, $F(0)=0$ impose $\beta^2=g(z_0)^2=f_\alpha(\psi(z_0))=f_\alpha(0)=-\alpha$, donc $|\beta|^2=|\alpha|$. Avec $f_{-\beta}(0)=\beta$, $f_{-\beta}'(0)=1-|\beta|^2$, $s'(\beta)=2\beta$ et $f_{-\alpha}'(\beta^2)=f_{-\alpha}'(-\alpha)=\frac{1-|\alpha|^2}{(1-|\alpha|^2)^2}=\frac{1}{1-|\alpha|^2}$ :
$$
F'(0)=\frac{2\beta(1-|\beta|^2)}{1-|\alpha|^2},\qquad |F'(0)|=\frac{2|\beta|(1-|\beta|^2)}{1-|\beta|^4}=\frac{2\sqrt{|\alpha|}}{1+|\alpha|}<1,
$$
la dernière inégalité équivalant à $(1-\sqrt{|\alpha|})^2>0$. On retrouve Schwarz sans Schwarz. Le gain $\frac{|\psi_1'(z_0)|}{|\psi'(z_0)|}=\frac{1+|\alpha|}{2\sqrt{|\alpha|}}$ est d'autant plus grand que le trou $\alpha$ est **proche de $0$**.
* **Sur le disque.** $\Omega=\mathbb D$, $z_0=0$, $\psi(z)=z/2$ (image $D(0,\frac12)$), $\alpha=\frac12\notin\psi(\mathbb D)$. Alors $f_\alpha\circ\psi(z)=\frac{z/2-1/2}{1-z/4}=\frac{2(z-1)}{4-z}$ ; $g(0)^2=-\frac12$, on choisit $\beta=g(0)=\frac{i}{\sqrt2}$. On a $(f_\alpha\circ\psi)'(0)=f_\alpha'(0)\cdot\frac12=\frac34\cdot\frac12=\frac38$, et $2g(0)g'(0)=\frac38$ donne $|g'(0)|=\frac{3/8}{2/\sqrt2}=\frac{3\sqrt2}{16}$. Puis $|\psi_1'(0)|=|f_\beta'(\beta)|\,|g'(0)|=\frac{1}{1-\frac12}\cdot\frac{3\sqrt2}{16}=\frac{3\sqrt2}{8}\approx0{,}530>\frac12=|\psi'(0)|$. Contrôle : $\frac{1/2}{3\sqrt2/8}=\frac{2\sqrt2}{3}=\frac{2\sqrt{1/2}}{1+1/2}$, conforme à la formule ci-dessus. (L'extrémal est ici $\id$, avec $\eta=1$.)

## Pièges

* > ⚠️ Le lemme de Schwarz donne seulement $|F'(0)|\le1$ ; l'inégalité **stricte** vient du cas d'égalité : $|F'(0)|=1$ forcerait $F$ à être une rotation, donc injective. Bien dire **pourquoi** $F$ n'est pas injective (le facteur $s:w\mapsto w^2$).
* Vérifier $F(0)=0$ : c'est l'hypothèse $\psi(z_0)=0$, transportée par $\psi=F\circ\psi_1$ et $\psi_1(z_0)=0$.
* L'ordre des compositions : $\psi_1=f_\beta\circ g$ (on recentre **après** la racine carrée), et $F$ « défait » dans l'ordre inverse : $f_{-\beta}$, puis $s$, puis $f_{-\alpha}$.
* Ne pas oublier que la racine carrée $g$ existe grâce à la **simple connexité** et à la **non-annulation** de $f_\alpha\circ\psi$ (contre-exemple $\mathbb D^\times$ ci-dessus).
* Le lemme ne dit pas que $\eta$ est atteint : c'est Montel + Weierstraß + Hurwitz qui le donnent ([[ch03-riemann-representation-conforme]]).
