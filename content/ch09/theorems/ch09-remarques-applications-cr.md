---
id: ch09-remarques-applications-cr
type: proposition
chapter: 9
title: Propriétés des applications $C^r$ entre sous-variétés (un couple de cartes suffit, composition, courbes)
ref: Remarques IX.7.7
page: 160
importance: 2
depends: [ch09-changement-parametrage, ch09-remarque-valeurs-vectorielles, ch09-application-cr-entre-sous-varietes-def, ch09-redressement-local, ch06-inversion-locale, ch09-ex-ouvert-sous-variete, ch05-composition-differentielles]
tags: [sous-variete, application-cr, composition, courbe, intrinseque-extrinseque, methode]
---
## Intuition

> 💡 Quatre règles de calcul qui rendent la Définition IX.7.5 ([[ch09-application-cr-entre-sous-varietes-def]]) utilisable :
> 1. **Une carte suffit** : il suffit de lire $\varphi$ dans **un** couple de paramétrages en chaque point (les autres s'en déduisent par changement de paramétrage).
> 2. **Intrinsèque = extrinsèque** : $\varphi:S_1\to S_2$ est $C^r$ si et seulement si, vue comme application à valeurs dans l'espace ambiant $\R^{N_2}$, elle est $C^r$ (on peut « oublier » $S_2$).
> 3. **Composition** : composer deux applications $C^r$ donne une application $C^r$.
> 4. **Courbes** : une courbe $C^r$ tracée sur $S_1$ et poussée par $\varphi$ donne une courbe $C^r$ sur $S_2$.

Rappel ([[ch09-remarque-valeurs-vectorielles]], Remarque IX.7.4) : $g:S\to\R^n$ est $C^r$ si pour tout paramétrage $x$ de $S$, $g\circ x$ est $C^r$ au sens usuel.

## Énoncé

**Proposition (poly, Remarques IX.7.7, p. 160).** Soient $S_1\subset\R^{N_1}$, $S_2\subset\R^{N_2}$ des sous-variétés de classe au moins $C^r$ ($r\ge1$), de dimensions $m_1,m_2$, et $\varphi:S_1\to S_2$ une application continue.

1. $\varphi$ est de classe $C^r$ si l'on peut trouver pour tout $p\in S_1$ des paramétrages locaux $x_1$ et $x_2$ respectivement de $S_1$ en $p$ et de $S_2$ en $\varphi(p)$ tels que $x_2^{-1}\circ\varphi\circ x_1$ soit de classe $C^r$ sur $x_1^{-1}\big(\varphi^{-1}(x_2(U_2))\cap x_1(U_1)\big)$.
2. On peut voir $\varphi:S_1\to S_2$ comme une application de $S_1$ dans $\R^{N_2}$ ; $\varphi:S_1\to S_2$ est de classe $C^r$ au sens de la Définition IX.7.5 si et seulement si $\varphi:S_1\to\R^{N_2}$ est de classe $C^r$ au sens de la Remarque IX.7.4.
3. La composée de deux applications différentiables (resp. de classe $C^r$) entre sous-variétés est une application différentiable (resp. de classe $C^r$).
4. Soit $I$ un intervalle ouvert de $\R$ et soit $\alpha:I\to S_1$ une courbe paramétrée de classe $C^r$ tracée dans $S_1$, c'est-à-dire une application de classe $C^r$ de $I$ dans $\R^{N_1}$ dont l'image est dans $S_1$. C'est aussi une application de classe $C^r$ de la sous-variété $I$ dans la sous-variété $S_1$ au sens de la Définition IX.7.5. Si $\varphi:S_1\to S_2$ est de classe $C^r$, alors $\beta=\varphi\circ\alpha:I\to S_2$ est de classe $C^r$ (et c'est donc une courbe $C^r$ de $\R^{N_2}$ tracée dans $S_2$).

## Hypothèses

### H1 — $S_1$, $S_2$ de classe au moins $C^r$

**Rôle.** Les changements de paramétrage $\theta_1=x_1^{-1}\circ y_1$, $\theta_2=y_2^{-1}\circ x_2$ sont alors des $C^r$-difféomorphismes ([[ch09-changement-parametrage]]) : c'est ce qui permet de transporter la régularité d'un couple de cartes à un autre (point 1), et de prolonger les cartes de $S_2$ en applications $C^r$ sur des ouverts de $\R^{N_2}$ (point 2).

**Si on la retire.** Le point 1 tombe. $S=\mathrm{Graphe}(t\mapsto t|t|)$ est une sous-variété $C^1$ seulement ; prenons $r=2$, $\varphi=\mathrm{id}_S$. Avec le couple $(x_1,x_1)$, $x_1(t)=(t,t|t|)$, on lit $x_1^{-1}\circ\varphi\circ x_1=\mathrm{id}$, de classe $C^\infty$, en tout point. Mais avec $x_2=x_1\circ\theta$, $\theta(s)=s+s|s|$, on lit $x_2^{-1}\circ\varphi\circ x_1=\theta^{-1}$, qui n'est pas $C^2$ (sa dérivée $t\mapsto1/\sqrt{1+4|t|}$ n'est pas dérivable en $0$). Un couple de cartes ne suffit pas.

### H2 — $\varphi$ continue

**Rôle.** Hypothèse de la Définition IX.7.5 ; elle rend ouverts les domaines de lecture, et permet de trouver un voisinage de $q$ dont l'image par $\varphi\circ y_1$ reste dans $x_2(U_2)$. Dans le sens « $\Leftarrow$ » du point 2, elle est automatique.

**Si on la retire.** Voir [[ch09-application-cr-entre-sous-varietes-def]], H1 ($\varphi=\mathbb 1_\Q$ : domaines non ouverts).

### H3 — (point 4) $I$ est un intervalle **ouvert**

**Rôle.** Un intervalle ouvert est une sous-variété de dimension $1$ de $\R$ (ouvert de $\R$), ce qui permet d'appliquer les points 2 et 3.

**Si on la retire.** $[0,1]$ n'est pas une sous-variété de $\R$ (comme la demi-droite fermée, [[ch09-contre-ex-demi-droite]], le point $0$ n'a pas de voisinage homéomorphe à un ouvert de $\R$) ; il faut alors se ramener à un intervalle ouvert, ou utiliser la notion de différentiabilité sur une partie non ouverte ([[ch06-differentiable-sur-partie-def]]).

## Idée de la preuve

Tout repose sur l'écriture, près d'un point, $y_2^{-1}\circ\varphi\circ y_1=\theta_2\circ(x_2^{-1}\circ\varphi\circ x_1)\circ\theta_1$ avec des changements de paramétrage $\theta_i$ (point 1), sur la factorisation par un paramétrage intermédiaire (point 3), et sur le prolongement $C^r$ d'une carte $x_2^{-1}$ en $p_1\circ\Phi$ défini sur un ouvert de $\R^{N_2}$ (point 2).

## Preuve

**Point 1.** Soient $y_1:U_1'\to S_1$, $y_2:U_2'\to S_2$ des paramétrages quelconques, $D=y_1^{-1}\big(\varphi^{-1}(y_2(U_2'))\cap y_1(U_1')\big)$ et $g=y_2^{-1}\circ\varphi\circ y_1:D\to U_2'$. Soit $q\in D$, $p=y_1(q)$, et $x_1,x_2$ les paramétrages en $p$ et $\varphi(p)$ donnés par l'hypothèse, $h=x_2^{-1}\circ\varphi\circ x_1$ ($C^r$ sur son domaine). L'ensemble
$$
O=\{u\in D :\ y_1(u)\in x_1(U_1),\ \varphi(y_1(u))\in x_2(U_2)\}
$$
est ouvert (continuité de $y_1$ et de $\varphi$, ouverture de $x_i(U_i)$ dans $S_i$) et contient $q$. Pour $u\in O$, en posant $\theta_1=x_1^{-1}\circ y_1$ et $\theta_2=y_2^{-1}\circ x_2$ :
$$
g(u)=y_2^{-1}\circ x_2\circ x_2^{-1}\circ\varphi\circ x_1\circ x_1^{-1}\circ y_1(u)=\theta_2\big(h(\theta_1(u))\big),
$$
toutes les expressions étant bien définies : $x_1(\theta_1(u))=y_1(u)$ est dans $x_1(U_1)\cap\varphi^{-1}(x_2(U_2))$, et $x_2(h(\theta_1(u)))=\varphi(y_1(u))$ est dans $x_2(U_2)\cap y_2(U_2')$. Les changements de paramétrage $\theta_1,\theta_2$ sont $C^r$ ([[ch09-changement-parametrage]], H1) et $h$ est $C^r$ : $g$ est $C^r$ sur $O$ ([[ch05-composition-differentielles]], itérée). Donc $g$ est $C^r$ au voisinage de chaque point de $D$, donc sur $D$.

**Point 2, sens $\Rightarrow$.** Supposons $\varphi$ de classe $C^r$ (Définition IX.7.5). Soit $x_1$ un paramétrage de $S_1$, $q\in U_1$, $p=x_1(q)$, et $x_2$ un paramétrage de $S_2$ en $\varphi(p)$. Sur l'ouvert $O=x_1^{-1}\big(\varphi^{-1}(x_2(U_2))\cap x_1(U_1)\big)\ni q$, on a $\varphi\circ x_1=x_2\circ(x_2^{-1}\circ\varphi\circ x_1)$, composée de deux applications $C^r$ ($x_2$ est de classe au moins $C^r$) : $\varphi\circ x_1:U_1\to\R^{N_2}$ est $C^r$ près de $q$, donc sur $U_1$.

**Point 2, sens $\Leftarrow$.** Supposons $\varphi\circ x_1$ de classe $C^r$ pour tout paramétrage $x_1$ de $S_1$. Alors $\varphi$ est continue (elle l'est sur chacun des ouverts $x_1(U_1)$, qui recouvrent $S_1$). Soient $x_1,x_2$ des paramétrages, $q$ dans le domaine de lecture, $p=x_1(q)$, $q_2=x_2^{-1}(\varphi(p))$. Comme dans la preuve de [[ch09-changement-parametrage]], le redressement $F(u,t)=x_2(u)+\psi(t)$ ($\psi$ isomorphisme de $\R^{N_2-m_2}$ sur un supplémentaire de $d(x_2)_{q_2}(\R^{m_2})$) est un $C^r$-difféomorphisme d'un ouvert $U'\times Y\ni(q_2,0)$ sur un ouvert $V'\ni\varphi(p)$ de $\R^{N_2}$, d'inverse $\Phi$, et $x_2^{-1}=p_1\circ\Phi$ sur $x_2(U')\cap V'$ ($p_1(u,t)=u$). L'ensemble $O=\{u : x_1(u)\in\varphi^{-1}(x_2(U')\cap V')\}$ est un ouvert contenant $q$, et sur $O$ :
$$
x_2^{-1}\circ\varphi\circ x_1=p_1\circ\Phi\circ(\varphi\circ x_1),
$$
composée d'applications $C^r$ entre ouverts : elle est $C^r$ près de $q$. D'où la classe $C^r$ au sens de la Définition IX.7.5.

**Point 3.** Soient $\varphi:S_1\to S_2$ et $\chi:S_2\to S_3$ de classe $C^r$ ; $\chi\circ\varphi$ est continue. Soient $x_1,x_3$ des paramétrages de $S_1,S_3$, $q$ dans le domaine de lecture de $\chi\circ\varphi$, $p=x_1(q)$, et $x_2$ un paramétrage de $S_2$ en $\varphi(p)$. Sur l'ouvert $O=\{u :\ \varphi(x_1(u))\in x_2(U_2)\}$ du domaine, qui contient $q$,
$$
x_3^{-1}\circ(\chi\circ\varphi)\circ x_1=\big(x_3^{-1}\circ\chi\circ x_2\big)\circ\big(x_2^{-1}\circ\varphi\circ x_1\big),
$$
où $v=x_2^{-1}(\varphi(x_1(u)))$ est bien dans le domaine de $x_3^{-1}\circ\chi\circ x_2$ (car $\chi(x_2(v))=\chi(\varphi(x_1(u)))\in x_3(U_3)$). C'est une composée de deux applications $C^r$ entre ouverts : elle est $C^r$ près de $q$. Pour « différentiable en $p$ », même calcul et règle de la chaîne au point $x_1^{-1}(p)$.

**Point 4.** $I$, ouvert de $\R$, est une sous-variété de dimension $1$ ([[ch09-ex-ouvert-sous-variete]]) ; ses paramétrages $y$ sont $C^r$, donc $\alpha\circ y$ est $C^r$ pour tout $y$ : $\alpha:I\to\R^{N_1}$ est $C^r$ au sens de la Remarque IX.7.4, donc, par le point 2, $\alpha:I\to S_1$ est $C^r$ au sens de la Définition IX.7.5. Par le point 3, $\beta=\varphi\circ\alpha:I\to S_2$ est $C^r$ ; par le point 2 à nouveau (avec le paramétrage $\mathrm{id}_I$), $\beta:I\to\R^{N_2}$ est $C^r$ au sens usuel. $\square$

## Preuve à trous

**Point 1.** Pour des paramétrages quelconques $y_1,y_2$ et $q$ dans le domaine, on choisit les paramétrages $x_1,x_2$ de l'hypothèse en $p=y_1(q)$ et $\varphi(p)$ ; près de $q$,
$$
y_2^{-1}\circ\varphi\circ y_1=\theta_2\circ\big(x_2^{-1}\circ\varphi\circ x_1\big)\circ\theta_1,
$$
où <trou indice="identifier θ_1 et θ_2, et dire pourquoi ils sont C^r">$\theta_1=x_1^{-1}\circ y_1$ et $\theta_2=y_2^{-1}\circ x_2$ sont des changements de paramétrage, donc des $C^r$-difféomorphismes (Proposition IX.6.1, $S_i$ de classe au moins $C^r$)</trou>.

**Point 2 ($\Leftarrow$).** La carte $x_2^{-1}$ n'est définie que sur $S_2$, mais <trou indice="redressement de x_2">elle coïncide près de $\varphi(p)$ avec $p_1\circ\Phi$, où $\Phi$ est l'inverse $C^r$ du redressement $F(u,t)=x_2(u)+\psi(t)$, défini sur un ouvert de $\R^{N_2}$</trou>. Donc <trou>$x_2^{-1}\circ\varphi\circ x_1=p_1\circ\Phi\circ(\varphi\circ x_1)$ est $C^r$ près de $q$</trou>.

**Point 3.** Près de $q$, on insère un paramétrage $x_2$ de $S_2$ en $\varphi(p)$ : <trou indice="x_2∘x_2^{-1}=id sur x_2(U_2)">$x_3^{-1}\circ\chi\circ\varphi\circ x_1=(x_3^{-1}\circ\chi\circ x_2)\circ(x_2^{-1}\circ\varphi\circ x_1)$</trou>, composée de deux applications $C^r$ entre ouverts. $\square$

## Exemples

* **Restrictions d'applications ambiantes (point 2).** Si $G:\Omega\to\R^{N_2}$ est $C^r$ sur un ouvert $\Omega\supset S_1$ de $\R^{N_1}$ et $G(S_1)\subset S_2$, alors $\varphi=G|_{S_1}:S_1\to S_2$ est $C^r$ : $\varphi\circ x_1=G\circ x_1$ est $C^r$. Exemple : l'application de Hopf $h:\mathbb S^3\to\mathbb S^2$, $h(z_1,z_2)=(2z_1\overline{z_2},\ |z_1|^2-|z_2|^2)\in\C\times\R\simeq\R^3$, polynomiale en les coordonnées réelles, est $C^\infty$, et $|2z_1\overline{z_2}|^2+(|z_1|^2-|z_2|^2)^2=(|z_1|^2+|z_2|^2)^2=1$ sur $\mathbb S^3$.
* **Courbe poussée (point 4).** $\alpha(t)=(\cos t,\sin t)$ est une courbe $C^\infty$ sur $\mathbb S^1$, et $\varphi(X,Y)=(X^2-Y^2,2XY)$ (« $z\mapsto z^2$ ») est $C^\infty$ de $\mathbb S^1$ dans $\mathbb S^1$ (restriction d'une application polynomiale). Donc $\beta(t)=\varphi(\alpha(t))=(\cos2t,\sin2t)$ est une courbe $C^\infty$ sur $\mathbb S^1$, ce qu'on vérifie directement.
* **Un couple de cartes suffit (point 1).** Pour l'antipodie $a(P)=-P$ de $\mathbb S^2$, il suffit de lire $a$ dans les couples d'hémisphères opposés : $x_2^{-1}\circ a\circ x_1(u,v)=(-u,-v)$ (voir [[ch09-application-cr-entre-sous-varietes-def]]) ; les six hémisphères ouverts recouvrent $\mathbb S^2$, donc $a$ est $C^\infty$. (Ou, plus vite, par le point 2 : $a$ est la restriction de $-\mathrm{Id}_{\R^3}$.)

## Pièges

* > ⚠️ Dans le point 1, les paramétrages doivent être pris **en $p$ et en $\varphi(p)$** pour **chaque** $p\in S_1$ ; un seul couple global ne couvre en général pas tout.
* > ⚠️ Le point 2 est le plus utilisé en exercice : pour montrer que $\varphi:S_1\to S_2$ est $C^r$, il suffit souvent de voir que c'est la restriction d'une application $C^r$ définie sur un ouvert de $\R^{N_1}$, à valeurs dans $S_2$. Mais attention : la réciproque « toute application $C^r$ est une restriction » n'est vraie que **localement** (Exercice IX.7.3).
* Dans le sens $\Leftarrow$ du point 2, on ne peut pas écrire $x_2^{-1}\circ(\varphi\circ x_1)$ « composée de $C^r$ » sans justification : $x_2^{-1}$ n'est pas définie sur un ouvert de $\R^{N_2}$ ; il faut son prolongement $p_1\circ\Phi$.
* Toutes ces règles demandent que les sous-variétés soient de classe au moins $C^r$ (H1).
