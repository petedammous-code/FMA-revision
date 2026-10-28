---
id: ch09-composition-differentielles
type: proposition
chapter: 9
title: Règle de composition des différentielles sur les sous-variétés
ref: Proposition IX.7.17
page: 163
importance: 2
depends: [ch09-differentielle-entre-sous-varietes-def, ch09-application-cr-entre-sous-varietes-def, ch09-espace-tangent-image-dx, ch05-composition-differentielles]
tags: [differentielle, composition, regle-de-la-chaine, sous-variete]
---
## Intuition

> 💡 C'est la règle de la chaîne, transportée sur les sous-variétés. Si $\varphi_1$ envoie une fourmi de $S_1$ sur une ombre dans $S_2$, et $\varphi_2$ envoie cette ombre sur une ombre de l'ombre dans $S_3$, alors la vitesse finale s'obtient en appliquant successivement les deux « règles de transport des vitesses » : $d(\varphi_2\circ\varphi_1)_p=d(\varphi_2)_{\varphi_1(p)}\circ d(\varphi_1)_p$.

Rappels : pour $\varphi : S\to S'$ entre sous-variétés, **différentiable en $p$** signifie que les lectures $x'^{-1}\circ\varphi\circ x$ dans des paramétrages locaux sont différentiables ([[ch09-application-cr-entre-sous-varietes-def]]) ; la **différentielle** $d\varphi_p : T_pS\to T_{\varphi(p)}S'$ est caractérisée par $d\varphi_p(dx_q(\vec w))=d(\varphi\circ x)_q(\vec w)$ pour tout paramétrage local $x$ en $p=x(q)$ ([[ch09-differentielle-entre-sous-varietes-def]]). La règle de la chaîne usuelle entre ouverts d'espaces $\R^n$ est [[ch05-composition-differentielles]].

## Énoncé

**Proposition (poly, Proposition IX.7.17, p. 163).** Soient $S_1$, $S_2$ et $S_3$ des sous-variétés (respectivement de $\R^{N_1}$, $\R^{N_2}$ et $\R^{N_3}$) et supposons que les applications
$$
\varphi_1 : S_1\to S_2,\qquad\varphi_2 : S_2\to S_3,
$$
(continues, comme dans la Définition IX.7.5) sont telles que $\varphi_1$ est différentiable en $p$, et $\varphi_2$ différentiable en $\varphi_1(p)$. Alors $\varphi_2\circ\varphi_1$ est différentiable en $p$, et
$$
d(\varphi_2\circ\varphi_1)_p=d(\varphi_2)_{\varphi_1(p)}\circ d(\varphi_1)_p .
$$

## Hypothèses

### H1 — $\varphi_1$ différentiable en $p$

**Rôle.** Elle donne la différentiabilité en $q_1$ de la lecture $g_1=x_2^{-1}\circ\varphi_1\circ x_1$, premier maillon de la règle de la chaîne, et l'existence de $d(\varphi_1)_p$.

**Si on la retire.** La formule n'a plus de sens, et la composée peut être différentiable ou non. Sur $S_1=S_2=S_3=\R$ : $\varphi_1(t)=|t|$ et $\varphi_2(s)=s$ donnent $|t|$, non différentiable en $0$. Mais avec $\varphi_2(s)=s^2$ on obtient $t^2$, différentiable : l'énoncé est une condition **suffisante**. Version « sous-variété » : sur $S_1=\mathbb S^1$, $\varphi_1(a,b)=|b|$ n'est pas différentiable en $(1,0)$ (lue dans $x(\theta)=(\cos\theta,\sin\theta)$, c'est $|\sin\theta|$, non dérivable en $0$), mais $\varphi_2\circ\varphi_1=b^2$ l'est.

### H2 — $\varphi_2$ différentiable en $\varphi_1(p)$ (au point image, pas en $p$)

**Rôle.** Elle donne la différentiabilité en $q_2=g_1(q_1)$ de $g_2=x_3^{-1}\circ\varphi_2\circ x_2$, second maillon de la chaîne.

**Si on la retire.** $\varphi_1(t)=t$, $\varphi_2(s)=|s|$ sur $\R$ : la composée $|t|$ n'est pas différentiable en $0$. Il faut bien la différentiabilité **au point $\varphi_1(p)$** : avec $\varphi_1(t)=t+1$ et $\varphi_2(s)=|s-1|$, $\varphi_2$ est différentiable en $p=0$ mais pas en $\varphi_1(0)=1$, et la composée $|t|$ n'est pas différentiable en $0$.

### H3 — continuité de $\varphi_1$ et $\varphi_2$

**Rôle.** Elle garantit que la composée $g_2\circ g_1$ est définie sur un **voisinage** de $q_1$ (ensembles $\varphi_1^{-1}(x_2(U_2))$, $\varphi_2^{-1}(x_3(U_3))$ ouverts), ce dont la règle de la chaîne a besoin.

**Si on la retire.** Condition de cadre : la notion de différentiabilité de la Définition IX.7.5 n'est posée que pour des applications continues.

## Idée de la preuve

Lire tout dans des paramétrages $x_1,x_2,x_3$ : $x_3^{-1}\circ(\varphi_2\circ\varphi_1)\circ x_1=g_2\circ g_1$ près de $q_1$, et la règle de la chaîne usuelle donne la différentiabilité. Pour la formule, utiliser la propriété 1 de la définition de $d\varphi_p$ et la règle de la chaîne pour $(\varphi_2\circ x_2)\circ g_1$.

## Preuve

*Variante du poly :* le poly dit seulement « ceci résulte facilement des formules habituelles du calcul différentiel et de la définition IX.7.15 » ; voici les détails.

Notons $p_2=\varphi_1(p)$, $p_3=\varphi_2(p_2)$, et fixons des paramétrages locaux $x_1 : U_1\to S_1$, $x_2 : U_2\to S_2$, $x_3 : U_3\to S_3$ en $p$, $p_2$, $p_3$, avec $x_1(q_1)=p$, $x_2(q_2)=p_2$, $x_3(q_3)=p_3$.

**Différentiabilité.** Les ensembles $x_2(U_2)$ et $x_3(U_3)$ sont des ouverts de $S_2$ et $S_3$ ; par continuité de $\varphi_1,\varphi_2,x_1$, l'ensemble
$$
W=\{u\in U_1 : \varphi_1(x_1(u))\in x_2(U_2)\ \text{et}\ \varphi_2(\varphi_1(x_1(u)))\in x_3(U_3)\}
$$
est un ouvert de $\R^{m_1}$ contenant $q_1$. Sur $W$ sont définies $g_1=x_2^{-1}\circ\varphi_1\circ x_1$ (à valeurs dans $U_2$) et $g_2\circ g_1$, où $g_2=x_3^{-1}\circ\varphi_2\circ x_2$, et
$$
x_3^{-1}\circ(\varphi_2\circ\varphi_1)\circ x_1=(x_3^{-1}\circ\varphi_2\circ x_2)\circ(x_2^{-1}\circ\varphi_1\circ x_1)=g_2\circ g_1\quad\text{sur }W
$$
(car $x_2\circ x_2^{-1}$ est l'identité de $x_2(U_2)$). Par hypothèse (Définition IX.7.5), $g_1$ est différentiable en $q_1$ et $g_2$ est différentiable en $g_1(q_1)=q_2$ ; par la règle de la chaîne ([[ch05-composition-differentielles]]), $g_2\circ g_1$ est différentiable en $q_1$. Les paramétrages $x_1$ (en $p$) et $x_3$ (en $p_3$) étant arbitraires, $\varphi_2\circ\varphi_1$ est différentiable en $p$ (et elle est continue comme composée d'applications continues).

**Formule.** Rappelons (étape 0 de la preuve de [[ch09-differentielle-entre-sous-varietes-def]]) que si $\varphi$ est différentiable en un point $x(q)$, alors $\varphi\circ x$ est différentiable en $q$ comme application à valeurs dans l'espace ambiant (car $\varphi\circ x=x'\circ g$ près de $q$, avec $x'$ un paramétrage au but et $g$ la lecture de $\varphi$). En particulier :
* $\varphi_1\circ x_1=x_2\circ g_1$ sur $W$, d'où $d(\varphi_1\circ x_1)_{q_1}=d(x_2)_{q_2}\circ d(g_1)_{q_1}$ ;
* $\varphi_2\circ x_2$ est différentiable en $q_2$.

Soit $\vec v\in T_pS_1$, et $\vec w\in\R^{m_1}$ tel que $\vec v=d(x_1)_{q_1}(\vec w)$ (Proposition IX.7.9, [[ch09-espace-tangent-image-dx]]). Posons $\vec w_2=d(g_1)_{q_1}(\vec w)\in\R^{m_2}$. Par la propriété 1 de la Définition IX.7.15 :
$$
d(\varphi_1)_p(\vec v)=d(\varphi_1\circ x_1)_{q_1}(\vec w)=d(x_2)_{q_2}(\vec w_2).
$$
Appliquons de nouveau la propriété 1, à $\varphi_2$ en $p_2$, avec le paramétrage $x_2$ et le vecteur $\vec w_2$ :
$$
d(\varphi_2)_{p_2}\big(d(\varphi_1)_p(\vec v)\big)=d(\varphi_2\circ x_2)_{q_2}(\vec w_2)=d(\varphi_2\circ x_2)_{q_2}\big(d(g_1)_{q_1}(\vec w)\big)=d\big((\varphi_2\circ x_2)\circ g_1\big)_{q_1}(\vec w),
$$
la dernière égalité par la règle de la chaîne usuelle ($g_1$ différentiable en $q_1$, $\varphi_2\circ x_2$ différentiable en $g_1(q_1)=q_2$). Or sur $W$, $(\varphi_2\circ x_2)\circ g_1=\varphi_2\circ(x_2\circ g_1)=\varphi_2\circ\varphi_1\circ x_1$. Donc, par la propriété 1 appliquée à $\varphi_2\circ\varphi_1$ (différentiable en $p$ d'après la première partie),
$$
d(\varphi_2)_{p_2}\big(d(\varphi_1)_p(\vec v)\big)=d\big((\varphi_2\circ\varphi_1)\circ x_1\big)_{q_1}(\vec w)=d(\varphi_2\circ\varphi_1)_p(\vec v).
$$
Ceci vaut pour tout $\vec v\in T_pS_1$. $\square$

*Remarque (preuve par les courbes, si $\varphi_1$ est $C^1$).* Pour $\vec v=\alpha'(0)$, la courbe $\beta=\varphi_1\circ\alpha$ est alors $C^1$, tracée sur $S_2$, avec $\beta'(0)=d(\varphi_1)_p(\vec v)$ ; en appliquant la propriété 2 à $\varphi_2$ et $\beta$, puis à $\varphi_2\circ\varphi_1$ et $\alpha$ : $d(\varphi_2)_{p_2}(\beta'(0))=(\varphi_2\circ\beta)'(0)=((\varphi_2\circ\varphi_1)\circ\alpha)'(0)=d(\varphi_2\circ\varphi_1)_p(\vec v)$. Si $\varphi_1$ est seulement différentiable en $p$, $\beta$ n'est que dérivable en $0$ et la propriété 2 ne s'applique pas directement à $\beta$ : d'où le passage par les paramétrages.

## Preuve à trous

Avec des paramétrages $x_1,x_2,x_3$ en $p,\ p_2=\varphi_1(p),\ p_3=\varphi_2(p_2)$ et les lectures $g_1=x_2^{-1}\circ\varphi_1\circ x_1$, $g_2=x_3^{-1}\circ\varphi_2\circ x_2$, on a, sur un voisinage ouvert de $q_1$ (par continuité), <trou indice="insérer $x_2\circ x_2^{-1}$">$x_3^{-1}\circ(\varphi_2\circ\varphi_1)\circ x_1=g_2\circ g_1$</trou>, différentiable en $q_1$ par la règle de la chaîne usuelle : $\varphi_2\circ\varphi_1$ est différentiable en $p$.

Pour $\vec v=d(x_1)_{q_1}(\vec w)$, comme $\varphi_1\circ x_1=x_2\circ g_1$, on a <trou>$d(\varphi_1)_p(\vec v)=d(\varphi_1\circ x_1)_{q_1}(\vec w)=d(x_2)_{q_2}(\vec w_2)$ avec $\vec w_2=d(g_1)_{q_1}(\vec w)$</trou>. Puis, par la propriété 1 pour $\varphi_2$ avec le paramétrage $x_2$ :
$$
d(\varphi_2)_{p_2}(d(\varphi_1)_p(\vec v))=d(\varphi_2\circ x_2)_{q_2}(d(g_1)_{q_1}(\vec w))=d\big((\varphi_2\circ x_2)\circ g_1\big)_{q_1}(\vec w),
$$
et comme <trou indice="simplifier $x_2\circ g_1$">$(\varphi_2\circ x_2)\circ g_1=\varphi_2\circ\varphi_1\circ x_1$ près de $q_1$</trou>, ceci vaut <trou>$d((\varphi_2\circ\varphi_1)\circ x_1)_{q_1}(\vec w)=d(\varphi_2\circ\varphi_1)_p(\vec v)$ par la propriété 1</trou>. $\square$

## Exemples

* **Carré sur le cercle, puis ordonnée.** $\varphi_1 : \mathbb S^1\to\mathbb S^1$, $(a,b)\mapsto(a^2-b^2,2ab)$ et $\varphi_2 : \mathbb S^1\to\R$, $(a,b)\mapsto b$. En $p=(1,0)$, $T_p\mathbb S^1=\R(0,1)$ et $\vec v=(0,1)$. On a $d(\varphi_1)_p(\vec v)=(0,2)$ (voir [[ch09-differentielle-entre-sous-varietes-def]] : $\varphi_1$ double les vitesses), puis $d(\varphi_2)_{(1,0)}(0,2)=2$ (restriction de la forme linéaire $(a,b)\mapsto b$). Directement : $(\varphi_2\circ\varphi_1)(\cos\theta,\sin\theta)=\sin2\theta$, de dérivée $2$ en $\theta=0$, et $\vec v=x'(0)$ pour $x(\theta)=(\cos\theta,\sin\theta)$ : on retrouve $2$.
* **Lecture dans un paramétrage.** Un paramétrage local $x : U\to S$ est une application $C^k$ entre la sous-variété $U$ (ouvert de $\R^m$) et $S$, avec $dx_q$ au sens des sous-variétés égal à la différentielle usuelle ([[ch09-remarques-differentielle-cas-euclidien]], point 1, et Exemple IX.7.6). Pour $f : S\to\R$ différentiable, la proposition donne $d(f\circ x)_q=df_p\circ dx_q$ : c'est exactement la propriété 1 de la définition de $df_p$, qui apparaît ainsi comme un cas particulier de la règle de composition.
* **Difféomorphismes.** Si $\varphi : S_1\to S_2$ est un difféomorphisme, $\varphi^{-1}\circ\varphi=\mathrm{Id}_{S_1}$ et $\varphi\circ\varphi^{-1}=\mathrm{Id}_{S_2}$ donnent $d(\varphi^{-1})_{\varphi(p)}\circ d\varphi_p=\mathrm{id}_{T_pS_1}$ et $d\varphi_p\circ d(\varphi^{-1})_{\varphi(p)}=\mathrm{id}_{T_{\varphi(p)}S_2}$ (la différentielle de l'identité de $S$ est l'identité de $T_pS$, par la propriété 2) : $d\varphi_p$ est un isomorphisme, et $\dim S_1=\dim S_2$ ([[ch09-differentielle-diffeomorphisme-isomorphisme]]).

## Pièges

* > ⚠️ La différentielle de $\varphi_2$ se prend au point **$\varphi_1(p)$**, pas en $p$ : $d(\varphi_2\circ\varphi_1)_p=d(\varphi_2)_{\varphi_1(p)}\circ d(\varphi_1)_p$.
* Les espaces de départ et d'arrivée doivent s'enchaîner : $T_pS_1\to T_{\varphi_1(p)}S_2\to T_{\varphi_2(\varphi_1(p))}S_3$. Composer avec $d(\varphi_2)$ sur un vecteur non tangent à $S_2$ n'a pas de sens.
* L'hypothèse est une condition **suffisante** : $\varphi_2\circ\varphi_1$ peut être différentiable sans que $\varphi_1$ le soit ($|b|$ puis $s\mapsto s^2$).
* Si $\varphi_1$ n'est que différentiable en $p$, l'argument « par les courbes » demande un soin particulier ($\varphi_1\circ\alpha$ n'est pas forcément $C^1$) ; la preuve par les paramétrages évite ce problème.
